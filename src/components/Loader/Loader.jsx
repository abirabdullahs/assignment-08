import React from 'react';
import { ClipLoader } from 'react-spinners';

export default function Loader() {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
      <ClipLoader color="#36d7b7" size={50} />
    </div>
  );
}
