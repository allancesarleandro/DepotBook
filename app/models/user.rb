class User < ApplicationRecord
  has_secure_password

  after_destroy :ensure_an_admin_remains

  class Error < StandardError
  end

private 
  def ensure_an_admin_remains
    if User.count.zero?
      raise Error.new "can't delete last user"
    end
  end
end