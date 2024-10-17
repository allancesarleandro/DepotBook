class SupportRequestsController < ApplicationController
  def index
    @support_requests = SupportRequest.all
  end

  def update
    support_requests = SupportRequest.find(params[:id])
    support_requests.update(response: params.require(:support_request)[
      :response])
      SupportRequestMailer.respond(support_request).deliver.now
      redirect_to support_requests_path
  end
end
