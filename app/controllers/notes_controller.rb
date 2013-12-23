class NotesController < ApplicationController
  respond_to :json
  def index
    category = Category.find(params[:category_id])
    respond_with category.notes
  end

  def create
    category = Category.find(params[:category_id])
    note = category.notes.build(note_params)
    note.save
    respond_with note
  end

  def destroy
    note = Note.find(params[:id])
    note.destroy
    respond_with note
  end

  def update
    note = Note.find(params[:id])
    note.update_attributes(note_params)
    respond_with note
  end

  private

    def note_params
      params.require(:note).permit(:title, :content)
    end
end
