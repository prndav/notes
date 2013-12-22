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

  def update
    category = Category.find(params[:id])
    category.update_attributes(category_params)
    respond_with category
  end

  def destroy
    category = Category.find(params[:id])
    category.destroy
    respond_with category
  end

  private

    def category_params
      params.require(:category).permit(:name)
    end
end
