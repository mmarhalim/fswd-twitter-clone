class StaticPagesController < ApplicationController
  def home
  end

  def feed 
    render 'feed'
  end

  def userpage
    render 'userpage'
  end

end
