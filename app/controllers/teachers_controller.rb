class TeachersController < ApplicationController
    def index
        teachers = Teacher.all
        render json: teachers, include: :students, status: :ok
    end

    def show
        teacher = Teacher.find_by(id: params[:id])
        render json: teacher, include: :students, status: :ok
    end

    def create
        teacher = Teacher.create(teacher_params)
        render json: teacher, status: :created 
    end

    def update
        teacher = Teacher.find_by(id: params[:id])
        teacher.update(teacher_params)
        render json: teacher
    rescue ActiveRecord::RecordInvalid => invalid
        render json: { errors: invalid.record.errors }, status: :unprocessable_entity
    
    end

    def destroy
        teacher = Teacher.find_by(id: params[:id])
        teacher.destroy
        head :no_content
    end

    private

    def teacher_params
        params.require(:teacher).permit(:firstname, :lastname, :age, :grade, :id, :created_at, :updated_at)
    end
end
