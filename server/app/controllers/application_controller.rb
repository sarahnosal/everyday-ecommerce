class ApplicationController < ActionController::Base

    helper_method :resource, :collection

    skip_before_action :verify_authenticity_token, if: :json_request?

    rescue_from ActiveRecord::RecordNotFound do |exception|
        @exception = exception
 
        render :exception
    end

    rescue_from ActiveRecord::RecordInvalid do
        render :errors, status: :unprocessable_entity
    end
    
    def new
        initialize_resource
    end
 
    def create
       build_resource
 
       resource.save!
    end
 
    def update
        resource.update! resource_params
    end
 
    def destroy
        resource.destroy!
    end

    private
    def json_request?
      request.format.json?
    end
end