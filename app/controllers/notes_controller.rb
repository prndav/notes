class NotesController < ApplicationController
  respond_to :json
  def index
    respond_with Note.all
  end
end
