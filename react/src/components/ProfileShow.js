// <div class="row columns">
//   <div class="small-12 large-6 columns">
//     <div class="row">
//       <img src="<%=@user.profile_photo%>" alt="avatar" class="profile">
//       <br/>
//       <%= link_to "Edit Profile", edit_user_registration_path, class: "button" %>
//       <!-- <%= link_to "Change Picture", edit_user_path, class: "button" %> -->
//     </div>
//   </div>
//   <div class="small-12 large-6 columns">
//     <h1><%= @user.first_name %> <%= @user.last_name %>'s Profile</h1>
//     <ul>
//       <li><strong>Username</strong> <%= @user.username %></li>
//       <li><strong>Name</strong> <%= @user.first_name %> <%= @user.last_name %></li>
//       <li><strong>Email</strong> <%= @user.email %></li>
//     </ul>
//
//   </div>
// </div>
