require 'rails_helper'

# Acceptance Criteria

  # > If I am signed in, I want to see a link to sign out
  # > If I click the sign out link, I am logged out of the app
  # > Once logged out, I see a message telling me I successfully logged out
  # > and am sent to the homepage

feature "user logs out of account" do

  before(:each) do
    user = FactoryGirl.create(:user)
    login_as(user, scope: :user)
  end

  scenario "sees and clicks on log out button from any page" do
    visit root_path

    click_link "Sign Out"

    expect(page).to have_content("Signed out successfully.")
    expect(current_path).to eq '/'
    expect(page).to have_content("Log In")
  end
end
