class TablesController < ApplicationController
  # GET /tables
  # GET /tables.json
before_filter :load_restaurant
skip_before_filter :verify_authenticity_token
  def index
    @tables = @restaurant.tables.all
    render json: @tables 
  end

  # GET /tables/1
  # GET /tables/1.json
  def show
    @table = @restaurant.tables.find(params[:id])
  end

  # GET /tables/new
  def new
    @table = @restaurant.tables.new
  end

  def updateStatus
    @restaurant = Restaurant.find(params[:restaurant_id])
    @table = @restaurant.tables.find(params[:id])
    @status = request.body.read.to_s
    @table.update_attributes!(:status => @status.split('=').last)
    render json: @table, status: 200
  end

  # GET /tables/1/edit
  def edit
    @restaurant = Restaurant.find(params[:restaurant_id])
    @table = @restaurant.tables.find(params[:id])
  end

  # POST /tables
  # POST /tables.json
  def create
    @restaurant = Restaurant.find(params[:restaurant_id])
    @table = @restaurant.tables.new(table_params)
    #respond_to do |format|
      if @table.save
        render json: @table
     #   format.html { redirect_to [@restaurant,@table], notice: 'Table was successfully created.' }
      #  format.json { render :show, status: :created, location: @table }
     # else
      #  format.html { render :new }
       # format.json { render json: @table.errors, status: :unprocessable_entity }
     # end
    end
  end

  # PATCH/PUT /tables/1
  # PATCH/PUT /tables/1.json
  def update
    @restaurant = Restaurant.find(params[:restaurant_id])
    @table = @restaurant.tables.find(params[:id])
   # @json = JSON.parse(request.body.read)
    #@table.update_attributes!(:status => @json['status'])
    #render json: "Status Updated", status: 200
      if @table.update(table_params)
       render json: @table
      #else
       # format.html { render :edit }
      #  format.json { render json: @table.errors, status: :unprocessable_entity }
      end
    end

  # DELETE /tables/1
  # DELETE /tables/1.json
  def destroy
    @table = @restaurant.tables.find(params[:id])
    @table.destroy
    respond_to do |format|
      format.html { redirect_to restaurant_tables_path(@restaurant), notice: 'Table was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    
    # Never trust parameters from the scary internet, only allow the white list through.
    def table_params
      params.require(:table).permit(:status, :capacity, :restaurant_id, :x, :y)
    end

    def load_restaurant
       @restaurant = Restaurant.where(:yelp_id => params[:restaurant_id]).first
    end

    def set_table
      @table = Table.find(params[:id])
     
    end

end
