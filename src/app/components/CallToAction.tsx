import Link from 'next/link'
import React from 'react'

function CallToAction() {
  return (
    <section className="bg-blue-600 text-white py-12 text-center">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-4">Ready to Get Started?</h2>
        <p className="text-lg mb-8">Join our community and unlock exclusive features today.</p>
        <Link href="/signup" className="bg-white text-blue-600 px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-100 transition-colors duration-300">
          Sign Up Now
        </Link>
      </div>
    </section>
  )
}

export default CallToAction