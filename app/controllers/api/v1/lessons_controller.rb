class Api::V1::LessonsController < ApplicationController

  def index
    lessonList = Lesson.all
    lessons = []
    lessonList.each do |lesson|
      if lesson.student_id == nil
        lessons << lesson
      end
    end
    shuffledLessons = lessons.shuffle
    render json: shuffledLessons
  end

  def create
  end

  def update
    Lesson.update(params[:id], student: current_user)
  end

end
