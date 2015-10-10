class RestaurantsController < ApplicationController
  before_action :set_restaurant, only: [:update, :destroy]
  skip_before_filter :verify_authenticity_token

  def index
    @restaurants = Restaurant.all
    render json: @restaurants
  end


  def show
    @restaurant = Restaurant.where(:yelp_id => params[:id].to_s).first
    @my_restaurant_hash = {:restaurant => {:avgwaittime => @restaurant.avgwaittime, :tables => @restaurant.tables}}
    render json:@my_restaurant_hash
  end

  def new
    @restaurant = Restaurant.new
  end

  def edit
    @restaurant = Restaurant.where(:yelp_id => params[:id].to_s).first
  end

  def create
    @restaurant = Restaurant.new(restaurant_params)

    #respond_to do |format|
      if @restaurant.save
        #format.html { redirect_to @restaurant, notice: 'Restaurant was successfully created.' }
       # format.json { render :show, status: :created, location: @restaurant }
        render json: @restaurant
    #  else
     #   format.html { render :new }
      #  format.json { render json: @restaurant.errors, status: :unprocessable_entity }
      end
    end

  # PATCH/PUT /restaurants/1
  # PATCH/PUT /restaurants/1.json
  def update
   # @json = JSON.parse(request.body.read)
   # @restaurant.update_attributes!()
   # render json: @restaurant, status: 200
   #respond_to do |format|

   if @restaurant.update(restaurant_params)
     #format.html { redirect_to [@restaurant], notice: 'Restaurant was successfully updated.' }
    #format.json { render :show, status: :ok, location: @restaurant }
    render json: @restaurant
   else

    format.html { render :edit }
   # format.json { render json: @table.errors, status: :unprocessable_entity }
   end

   end

  def updateAverageWaitTime
    @restaurant = Restaurant.find(params[:id])
   # @json = JSON.parse(request.body.read)
    @avgwaittime = request.body.read.to_s
    @restaurant.update_attributes!(:avgwaittime => @avgwaittime.split('=').last)
    render json: @restaurant, status: 200
  end

  # DELETE /restaurants/1
  # DELETE /restaurants/1.json
  def destroy
    @restaurant.destroy
    respond_to do |format|
      format.html { redirect_to restaurants_url, notice: 'Restaurant was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_restaurant
      @restaurant = Restaurant.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def restaurant_params
      params.require(:restaurant).permit(:name, :address, :email, :phone, :avgwaittime, :yelp_id)
    end
end
