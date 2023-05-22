import React, { useState, useRef } from 'react';
import "./EditProfile.css"

function EditProfile({ onClose }) {
    const [username, setUsername] = useState('nonnynon');
    const [bio, setBio] = useState('');
    const fileInputRef = useRef(null);
  
    const handleUsernameChange = (event) => {
      setUsername(event.target.value);
    };
  
    const handleBioChange = (event) => {
      setBio(event.target.value);
    };
  
    const handleProfilePictureUpload = (event) => {
      const file = event.target.files[0];
      // Perform the file upload logic here
      // For example, you can upload the file to a server using FormData or an API call
    };
  
    const handleSubmit = (event) => {
      event.preventDefault();
      // Perform the profile update logic here
      // You can use the username and bio state values to update the user's profile information
      // For example, you can make an API call to update the user's profile data
      // Once the update is successful, you can close the EditProfileWidget or show a success message
    };
    const handleProfilePictureClick = () => {
        fileInputRef.current.click();
    }
  
    return (
      <div className="edit-profile-overlay">
        <div className="edit-profile-widget">
         
          <form onSubmit={handleSubmit}>
          
            <div className="form-group">
              <label htmlFor="username">Username:</label>
              <input
                type="text"
                id="username"
                value={username}
                onChange={handleUsernameChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="description">Description:</label>
              <select>
                <option value="">Artist</option>
                <option value="">Reviewer</option>
                <option value="">Actor</option>
                <option value="">Actress</option>
                <option value="">Influencer</option>
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="profilePicture">Edit Profile Picture:</label>
              <button onClick={handleProfilePictureUpload}>Edit Picture
              <input
                type="file"
                id="profilePicture"
                accept="image/*"
                onChange={handleProfilePictureUpload}
              />
              </button>
              
            </div>
            <div className="form-group">
              <label htmlFor="bio">Bio:</label>
              <textarea
                id="bio"
                value={bio}
                onChange={handleBioChange}
              ></textarea>
            </div>
            <div className="button-group">
              <button type="submit">Save</button>
              <button type="button" onClick={onClose}>Cancel</button>
            </div>
          </form>
        </div>
      </div>
    );
  }
  
  export default EditProfile;


// import 'bootstrap/dist/css/bootstrap.min.css';


// function EditProfile() {
  
// 	return (
// 		<div>
// 			<div class="container bootstrap snippets bootdey">
//     <h1 class="text-primary">Edit Profile</h1>
//       <hr/>
// 	<div class="row">
      
//       <div class="col-md-3">
//         <div class="text-center">
//           <img src="https://bootdey.com/img/Content/avatar/avatar7.png" class="avatar img-circle img-thumbnail" alt="avatar"/>
//           <h6>Upload a different photo...</h6>
          
//           <input type="file" class="form-control"/>
//         </div>
//       </div>
      
      
//       <div class="col-md-9 personal-info">
//         <div class="alert alert-info alert-dismissable">
//           <a class="panel-close close" data-dismiss="alert">×</a> 
//           <i class="fa fa-coffee"></i>
//           This is an <strong>.alert</strong>. Use this to show important messages to the user.
//         </div>
//         <h3>Personal info</h3>
        
//         <form class="form-horizontal" role="form">
//           <div class="form-group">
//             <label class="col-lg-3 control-label">First name:</label>
//             <div class="col-lg-8">
//               <input class="form-control" type="text" value="dey-dey"/>
//             </div>
//           </div>
//           <div class="form-group">
//             <label class="col-lg-3 control-label">Last name:</label>
//             <div class="col-lg-8">
//               <input class="form-control" type="text" value="bootdey"/>
//             </div>
//           </div>
//           <div class="form-group">
//             <label class="col-lg-3 control-label">Company:</label>
//             <div class="col-lg-8">
//               <input class="form-control" type="text" value=""/>
//             </div>
//           </div>
//           <div class="form-group">
//             <label class="col-lg-3 control-label">Email:</label>
//             <div class="col-lg-8">
//               <input class="form-control" type="text" value="janesemail@gmail.com"/>
//             </div>
//           </div>
//           <div class="form-group">
//             <label class="col-lg-3 control-label">Time Zone:</label>
//             <div class="col-lg-8">
//               <div class="ui-select">
//                 <select id="user_time_zone" class="form-control">
//                   <option value="Hawaii">(GMT-10:00) Hawaii</option>
//                   <option value="Alaska">(GMT-09:00) Alaska</option>
//                   <option value="Pacific Time (US &amp; Canada)">(GMT-08:00) Pacific Time (US &amp; Canada)</option>
//                   <option value="Arizona">(GMT-07:00) Arizona</option>
//                   <option value="Mountain Time (US &amp; Canada)">(GMT-07:00) Mountain Time (US &amp; Canada)</option>
//                   <option value="Central Time (US &amp; Canada)" selected="selected">(GMT-06:00) Central Time (US &amp; Canada)</option>
//                   <option value="Eastern Time (US &amp; Canada)">(GMT-05:00) Eastern Time (US &amp; Canada)</option>
//                   <option value="Indiana (East)">(GMT-05:00) Indiana (East)</option>
//                 </select>
//               </div>
//             </div>
//           </div>
//         </form>
//       </div>
//   </div>
// </div>
// <hr/>
// 		</div>
// 	);
// }
// export default EditProfile;