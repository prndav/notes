class CategoriesController < ApplicationController
  respond_to :json

  def index
    respond_with Category.all
  end

  def create
    category = Category.new(category_params)
    category.save
    respond_with(category)
  end

  private

    def category_params
      params.require(:category).permit(:name)
    end
end
