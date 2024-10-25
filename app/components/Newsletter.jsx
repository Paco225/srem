import { motion } from 'framer-motion';
import { useState, useRef } from 'react';
import ReCAPTCHA from "react-google-recaptcha";

const Newsletter = () => {
  const [email, setEmail] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [recaptchaValue, setRecaptchaValue] = useState(null);
  const recaptchaRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email.trim() === '') {
      alert('Le champ email est requis');
      return;
    }
    if (!recaptchaValue) {
      alert('Veuillez valider le reCAPTCHA');
      return;
    }
    // Traitement du formulaire ici
    setSuccessMessage('Votre demande a été envoyée avec succès !');
    setEmail('');
    recaptchaRef.current.reset();
    setRecaptchaValue(null);
    
    setTimeout(() => {
      setSuccessMessage('');
    }, 3000);
  };

  const handleRecaptchaChange = (value) => {
    setRecaptchaValue(value);
  };

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
        Inscrivez-vous à notre newsletter et découvrez nos services de restauration <br /> dédiés aux travailleurs miniers !        </p>
        
        <form onSubmit={handleSubmit} className="flex flex-col items-center">
          <div className="flex flex-col sm:flex-row justify-center w-full mb-4">
            <input
              type="email"
              placeholder="Entrer votre email"
              className="px-4 py-3 w-full sm:w-auto sm:flex-grow bg-white text-black focus:outline-none rounded-l-lg"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <button
              type="submit"
              className="px-6 py-3 bg-black text-white rounded-r-lg hover:bg-gray-800 transition duration-300 mt-2 sm:mt-0"
            >
              Envoyer
            </button>
          </div>
          <ReCAPTCHA
            ref={recaptchaRef}
            sitekey="6LdSO2wqAAAAAC-8UkKhU00VOW7vATD7rzoZqUMa"
            onChange={handleRecaptchaChange}
          />
        </form>

        {successMessage && (
          <div className="mt-6 bg-green-100 border-l-4 border-green-500 text-green-700 p-4">
            {successMessage}
          </div>
        )}
      </motion.div>
    </div>
  );
};

export default Newsletter;
