class ApplicationMailer < ActionMailer::Base
  default from: 'confirm@gentlereminders.rocks'
  layout 'mailer'
end
