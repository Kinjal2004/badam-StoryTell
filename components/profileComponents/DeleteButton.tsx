"use client";
import React, { useState } from "react";
import axios from "axios";

interface DeleteButtonProps {
  id: string;
}

export default function DeleteButton({ id }: DeleteButtonProps) {
  const [isDialogOpen, setDialogOpen] = useState(false);

  const openDialog = () => {
    setDialogOpen(true);
  };

  const closeDialog = () => {
    setDialogOpen(false);
    window.location.reload();
  };

  const handleDelete = async () => {
    try {
      console.log(`Deleting story with ${id}`);
      const response = await axios.delete("/api/deleteStory", {
        params: { id },
      });

      console.log("Server Response:", response.data);
      closeDialog();
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div>
      <button
        onClick={openDialog}
        className="px-2 py-1 bg-red-500 text-white rounded hover:bg-red-600 focus:outline-none focus:shadow-outline-red"
      >
        Delete
      </button>
      {isDialogOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-75">
          <div className="bg-white p-4 rounded shadow-md">
            <p className="text-gray-800 mb-4">
              This will delete your story forever. Do you want to proceed?
            </p>
            <div className="flex justify-end">
              <button
                onClick={closeDialog}
                className="px-3 py-1 mr-2 bg-green-700 text-white rounded hover:bg-gray-400 focus:outline-none focus:shadow-outline-gray"
              >
                Cancel
              </button>
              <button
                onClick={handleDelete}
                className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600 focus:outline-none focus:shadow-outline-red"
              >
                Confirm
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
