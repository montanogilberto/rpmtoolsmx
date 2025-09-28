import React, { useState } from 'react';
import { Send, CheckCircle } from 'lucide-react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const payload = {
        contact_email: [
          {
            nombre: formData.name,
            email: formData.email,
            mensaje: formData.message,
            sender_email: "administracion@rpmtoolsmx.com"
          }
        ]
      };

      const response = await fetch("https://smartloansbackend.azurewebsites.net/contact_email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        throw new Error(`Error ${response.status}`);
      }

      const data = await response.json();
      console.log("✅ Backend response:", data);

      setIsSubmitted(true);
      setFormData({ name: '', email: '', message: '' });

      setTimeout(() => setIsSubmitted(false), 5000);
    } catch (error) {
      console.error("❌ Error sending message:", error);
      alert("Hubo un error al enviar el formulario. Intenta de nuevo.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contacto" className="py-16 bg-gradient-to-b from-metallic-gray-dark/10 to-technical-black">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="section-title text-4xl lg:text-5xl font-bold mb-6">
              Contacto
            </h2>
            <p className="text-xl text-steel-gray-light max-w-2xl mx-auto">
              ¿Tienes alguna pregunta? Estamos aquí para ayudarte con tus necesidades industriales.
            </p>
          </div>

          <div className="metallic-card p-8 lg:p-12">
            {isSubmitted ? (
              <div className="text-center py-8">
                <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
                <h3 className="text-2xl font-semibold text-steel-gray-light mb-2">
                  ¡Mensaje Enviado!
                </h3>
                <p className="text-steel-gray-light">
                  Gracias por contactarnos. Te responderemos pronto.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-steel-gray-light font-medium mb-2">
                    Nombre Completo *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="contact-form-input w-full px-4 py-3"
                    placeholder="Ingresa tu nombre completo"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-steel-gray-light font-medium mb-2">
                    Correo Electrónico *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="contact-form-input w-full px-4 py-3"
                    placeholder="tu@email.com"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-steel-gray-light font-medium mb-2">
                    Mensaje *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="contact-form-textarea w-full px-4 py-3"
                    placeholder="Describe tu consulta o requerimiento..."
                  />
                </div>

                <div className="pt-4">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="contact-submit-btn w-full py-4 px-8 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                  >
                    {isSubmitting ? (
                      <span className="flex items-center justify-center">
                        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                        Enviando...
                      </span>
                    ) : (
                      <span className="flex items-center justify-center">
                        <Send size={20} className="mr-2" />
                        Enviar Mensaje
                      </span>
                    )}
                  </button>
                </div>

                <p className="text-sm text-steel-gray-light/70 text-center">
                  * Campos requeridos. Tu información está segura y no será compartida.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
