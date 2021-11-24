class StudentsController < ApplicationController
    before_action :set_student, only: [:show, :update, :destroy]

    def index
        if params[:teacher_id]
            @students = Student.where(teacher_id: params[:teacher_id])
        else
            @students = Student.all
        end
        render json: @students
    end

    def show
        if @student
            render json: student, status: :ok
        else
            render json: {error: "Student Not Found"}, status: :not_found
        end
    end

    def create
            student = Student.create!(student_params)
            render json: student, status: :created
    end

    def update
        @student.update(student_params)
        render json: student
    rescue ActiveRecord::RecordInvalid => errors
        render json: { errors: errors.record.errors.full_messages }, status: :unprocessable_entity
    end

    def destroy
        @student.destroy
        head :no_content
    end

    private

    def student_params
        params.require(:student).permit(:firstname, :lastname, :grade, :id, :teacher_id)
    end

    def set_student
        @student = Student.find_by(id: params[:id])
    end
end
