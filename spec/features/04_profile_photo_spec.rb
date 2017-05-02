require "rails_helper"

feature "profile photo" do
  scenario "user uploads a profile photo" do
    visit root_path
    click_link "Sign Up"

    fill_in "Email", with: "ash@s-mart.com"
    fill_in "Password", with: "boomstick!3vilisd3ad"
    fill_in "Password Confirmation", with: "boomstick!3vilisd3ad"
    fill_in "Username", with: 'Ashyperson'
    fill_in "Zip Code", with: '01108'
    choose('Student')

    attach_file :user_profile_photo, "#{Rails.root}/spec/support/images/photo.jpeg"
    click_button "Sign Up"

    # expect(page).to have_content("Welcome! You have signed up successfully.")
    # expect(page).to have_css("img[src*='photo.png']")
  end
end
