'use client'

import { useState, useRef } from 'react'
import { Upload, X } from "lucide-react"

const Button = ({ children, className, ...props }) => (
  <button 
    className={`px-4 py-2 rounded-md font-semibold focus:outline-none focus:ring-2 focus:ring-offset-2 ${className}`} 
    {...props}
  >
    {children}
  </button>
)

const Input = ({ className, ...props }) => (
  <input 
    className={`w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 ${className}`} 
    {...props}
  />
)

const Label = ({ children, className, ...props }) => (
  <label 
    className={`block text-sm font-medium text-gray-700 ${className}`} 
    {...props}
  >
    {children}
  </label>
)

export default function Postuler() {
  const [isOpen, setIsOpen] = useState(false)
  const [fileName, setFileName] = useState('')
  const fileInputRef = useRef(null)

  const handleFileChange = (event) => {
    const file = event.target.files?.[0]
    if (file) {
      if (file.type === 'application/pdf') {
        setFileName(file.name)
      } else {
        alert('Please upload a PDF file')
        if (fileInputRef.current) {
          fileInputRef.current.value = ''
        }
      }
    }
  }

  const handleUploadClick = () => {
    fileInputRef.current?.click()
  }

  return (
    <div>
      <Button 
        className="bg-[#FD053F] text-white hover:bg-red-500 w-full"
        onClick={() => setIsOpen(true)}
      >
        Postuler
      </Button>
      {isOpen && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg max-w-md w-full p-6 relative z-60" >
            <button
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-700 focus:outline-none"
              onClick={() => setIsOpen(false)}
              aria-label="Close"
            >
              <X size={24} />
            </button>
            <h2 className="text-lg font-semibold mb-4">Formulaire candidat</h2>
            <form className="space-y-4">
              <div>
                <Label htmlFor="name">Nom & prenoms</Label>
                <Input id="name" />
              </div>
              <div>
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" />
              </div>
              <div>
                <Label htmlFor="phone">Telephone</Label>
                <Input id="phone" type="tel" />
              </div>
              <div>
                <input
                  type="file"
                  accept=".pdf"
                  className="hidden"
                  ref={fileInputRef}
                  onChange={handleFileChange}
                />
                <Button 
                  type="button" 
                  className="w-full bg-white border border-gray-300 hover:bg-gray-50"
                  onClick={handleUploadClick}
                >
                  <Upload className="inline-block mr-2 h-4 w-4" />
                  {fileName ? fileName : 'Upload ton CV'}
                </Button>
              </div>
              <Button 
                type="submit" 
                className="w-full bg-[#FD053F] text-white hover:bg-red-700"
              >
                Envoyer
              </Button>
            </form>
          </div>
        </div>
      )}
    </div>
  )
}
