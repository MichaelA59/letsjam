require 'rails_helper'

RSpec.describe User, type: :model do

  it { should have_valid(:first_name).when("Bruce") }
  it { should_not have_valid(:first_name).when(nil, "") }

  it { should have_valid(:last_name).when("Wayne") }
  it { should_not have_valid(:last_name).when(nil, "") }

  it { should have_valid(:email).when("batman@yahoo.com") }
  it { should_not have_valid(:email).when(nil, "") }

  it { should have_valid(:password).when("password123") }
  it { should_not have_valid(:password).when(nil, "") }

  it { should have_valid(:username).when("batman") }
  it { should_not have_valid(:username).when(nil, "") }

  it { should have_valid(:zip).when("01106") }
  it { should_not have_valid(:zip).when(nil, "") }

  it { should have_valid(:is_student).when(true) }
  it { should_not have_valid(:is_student).when(nil, "") }

  it 'has a matching password confirmation for the password' do
    user = User.new
    user.password = 'password'
    user.password_confirmation = 'drowssap'

    expect(user).to_not be_valid
    # expect(user.errors[:password_confirmation]).to_not be_blank
  end
  #
  # it "is not an admin if the role is not admin" do
  #   user = FactoryGirl.create(:user, role: "member")
  #   expect(user.admin?).to eq(false)
  # end
  #
  # it "is an admin if the role is admin" do
  #   user = FactoryGirl.create(:user, role: "admin")
  #   expect(user.admin?).to eq(true)
  # end

end
