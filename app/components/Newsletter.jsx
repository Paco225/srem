import { motion } from 'framer-motion';
import { useState } from 'react';

const Newsletter = () => {
  const [projectName, setProjectName] = useState('');

  return (
    <div className="min-h-[50vh] flex items-center justify-center px-4">
      <motion.div
        className="w-full max-w-5xl bg-gradient-to-l from-[#ef305d] to-[#FD053F] p-8 rounded-lg shadow-lg"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
      >
        <h1 className=" text-center text-4xl sm:text-5xl font-bold text-white mb-4">
          Prenez rendez-vous<span className="text-yellow-400 text-center"> avec nous</span>
        </h1>
        <p className="text-white mb-8 text-center">
        Nous le rendons si simple que vous n’aurez pas besoin de vous embêter.
        </p>
        <div className="flex justify-center">
          <input
            type="text"
            placeholder="Enter a project name"
            className="px-4 py-3 w-full sm:w-auto sm:flex-grow-0 bg-white text-black rounded-l-lg focus:outline-none"
            value={projectName}
            onChange={(e) => setProjectName(e.target.value)}
          />
          <button
            className="px-6 py-3 bg-black text-white rounded-r-lg hover:bg-gray-800 transition duration-300"
          >
            Envoyer
          </button>
        </div>
      </motion.div>
    </div>
  );
};

export default Newsletter;
