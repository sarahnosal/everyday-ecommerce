class ApplicationController < ActionController::Base

    helper_method :resource, :collection

    rescue_from ActiveRecord::RecordNotFound do |exception|
        @exception = exception
 
        render :exception
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
end