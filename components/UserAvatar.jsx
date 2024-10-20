import React, { useState, useEffect } from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import dynamic from 'next/dynamic'; // For dynamic import
import { useAuth } from "@/context/AuthContext";
// Dynamically import AvatarEditor with SSR disabled
const AvatarEditor = dynamic(() => import("react-avatar-edit"), { ssr: false });

const ProfilePictureEditor = () => {
  const [preview, setPreview] = useState(null);
  const [src, setSrc] = useState(null); // Source for AvatarEditor
  const [open, setOpen] = useState(false); // Dialog open/close
  const [isClient, setIsClient] = useState(false);
  const { user } = useAuth(); // Get user from auth context
  useEffect(() => {
    // This code will only run on the client side
    setIsClient(true);
  }, []);

  // Handle image crop preview
  const onClose = () => {
    setPreview(null);
  };

  const onCrop = (view) => {
    setPreview(view); // Save the cropped image
  };

  const onBeforeFileLoad = (elem) => {
    if (elem.target.files[0].size > 716800) {
      alert("File is too big! Please select an image smaller than 700KB.");
      elem.target.value = "";
    }
  };

  if (!isClient) {
    return null; // Return nothing during SSR
  }

  return (
    <div className="flex flex-col items-center py-10">
      {/* Profile Avatar */}
      <Avatar
        alt=""
        src={preview || "/default-avatar.png"} // Default or cropped image
        sx={{ width: 100, height: 100 }}
      />

      {/* Edit Button to open Avatar Editor */}
      <h1 className="font-bold text-2xl text-white">{user?.displayName || "Guest"}</h1>
      <div
        className="font-light text-xs text-white underline"
        variant="contained"
        onClick={() => setOpen(true)}
      >
        Edit Profile Picture
      </div>

      {/* Dialog for Avatar Editor */}
      <Dialog open={open} onClose={() => setOpen(false)}>
        <DialogContent>
          <AvatarEditor
            width={200}
            height={200}
            onCrop={onCrop} // Function to handle cropped image
            onClose={onClose} // Reset if user cancels
            onBeforeFileLoad={onBeforeFileLoad}
            src={src} // Optional, for loading an image
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpen(false)} variant="contained">
            Save
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default ProfilePictureEditor;
