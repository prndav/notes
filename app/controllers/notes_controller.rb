class NotesController < ApplicationController
  respond_to :json
  def index
    category = Category.find(params[:category_id])
    respond_with category.notes
  end
end
