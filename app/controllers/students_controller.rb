class StudentsController < ApplicationController
    before_action :set_student, only: [:show, :update, :destroy]

    def index
        students = Student.all
        render json: students
    end

    def show
        if @student
            render json: student, status: :ok
        else
            render json: {error: "Student Not Found"}, status: :not_found
        end
    end

    def create
        student = Student.create(student_params)
        if student.valid?
            render json: student, status: :created
        else
            render json: {error: student.errors.full_messages}, status: :unprocessable_entity
        end
    end

    def update
        @student.update(student_params)
        render json: student
    rescue ActiveRecord::RecordInvalid => invalid
        render json: { errors: errors.record.errors.full_messages }, status: :unprocessable_entity
    end

    def destroy
        @student.destroy
        head :no_content
    end

    private

    def student_params
        params.permit(:firstname, :lastname, :grade, :id, :student)
    end

    def set_student
        @student = Student.find_by(id: params[:id])
    end
end
