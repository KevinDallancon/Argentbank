import React, { useState } from 'react';
import { useUpdateUserProfileMutation } from '../../src/Redux/Services/apiServices';


const UserInfo = ({ firstName, lastName }) => {
  // État pour gérer le mode édition
  const [isEditing, setIsEditing] = useState(false);
  
  // États pour stocker les valeurs temporaires pendant l'édition
  const [newFirstName, setNewFirstName] = useState(firstName || '');
  const [newLastName, setNewLastName] = useState(lastName || '');
  
  // Hook pour la mise à jour du profil
  const [updateProfile, { isLoading: isUpdating }] = useUpdateUserProfileMutation();
  

  const handleEditSubmit = async (e) => {
    e.preventDefault();
    try {
      // Appel à l'API pour mettre à jour le profil
      await updateProfile({
        firstName: newFirstName,
        lastName: newLastName
      }).unwrap();
      
      // Fermer le mode édition
      setIsEditing(false);
      
    } catch (error) {
      console.error('Error updating profile:', error);
    }
  };
  // Fonction pour annuler l'édition et réinitialiser les champs
  const handleCancel = () => {
    setNewFirstName(firstName || '');
    setNewLastName(lastName || '');
    setIsEditing(false);
  };

  return (
    <div className="header">
      {!isEditing ? (
        // Mode affichage
        <>
          <h1>Welcome back<br />{firstName} {lastName}!</h1>
          <button className="edit-button" onClick={() => setIsEditing(true)}>
            Edit Name
          </button>
        </>
      ) : (
        // Mode édition
        <div className="edit-user-form">
          <h2>Edit user info</h2>
          <form onSubmit={handleEditSubmit}>
            <div className="input-wrapper">
              <label htmlFor="firstName">First Name</label>
              <input
                type="text"
                id="firstName"
                value={newFirstName}
                onChange={(e) => setNewFirstName(e.target.value)}
                required
              />
            </div>
            <div className="input-wrapper">
              <label htmlFor="lastName">Last Name</label>
              <input
                type="text"
                id="lastName"
                value={newLastName}
                onChange={(e) => setNewLastName(e.target.value)}
                required
              />
            </div>
            <div className="button-wrapper">
              <button 
                type="submit" 
                className="save-button"
                disabled={isUpdating}
              >
                {isUpdating ? "Saving..." : "Save"}
              </button>
              <button 
                type="button" 
                className="cancel-button" 
                onClick={handleCancel}
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
};

export default UserInfo;