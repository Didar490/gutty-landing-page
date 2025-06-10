import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const TermsOfUse = () => {
  return (
    <div className="min-h-screen bg-health-gradient">
      <div className="container mx-auto px-6 py-20">
        <div className="max-w-4xl mx-auto">
          {/* Back to Home */}
          <div className="mb-8">
            <Link 
              to="/" 
              className="inline-flex items-center gap-2 text-health-700 hover:text-health-800 transition-colors duration-200 font-medium"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Home
            </Link>
          </div>

          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Terms of Use
            </h1>
            <p className="text-xl text-gray-700 leading-relaxed">
              End User License Agreement for Gutty
            </p>
          </div>

          {/* Content */}
          <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-lg space-y-8">
            
            {/* EULA Header */}
            <section>
              <h2 className="text-3xl font-bold text-gray-900 mb-6 bg-wellness-gradient bg-clip-text text-transparent">
                END USER LICENSE AGREEMENT
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                <strong>Last Updated:</strong> June 10, 2025
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                Gutty is licensed to you ("End-User") by Didar Korkembay, located at MUGHALZHAR 34, Astana, Akmola Oblast 010000, Kazakhstan ("Licensor"), for use only under the terms of this License Agreement.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                By downloading the Licensed Application from Apple's software distribution platform (the "App Store") and any updates thereto, you agree to be bound by all the terms of this License Agreement. The App Store is referred to as the "Services" in this License Agreement.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                The parties acknowledge that Apple is not a party to this License Agreement and is not bound by any obligations regarding the Licensed Application, including warranty, liability, or support. Didar Korkembay, not the Services, is solely responsible for the Licensed Application and its content.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                This License Agreement complies with Apple's Media Services Terms and Conditions ("Usage Rules"). The Licensor confirms that this Agreement does not conflict with those Usage Rules.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Gutty is licensed, not sold, to you for use only under the terms of this Agreement. The Licensor reserves all rights not expressly granted to you. The app is to be used only on Apple devices running iOS or macOS.
              </p>
            </section>

            {/* Table of Contents */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                TABLE OF CONTENTS
              </h2>
              <div className="grid md:grid-cols-2 gap-2 text-gray-700">
                <div>1. THE APPLICATION</div>
                <div>10. PRODUCT CLAIMS</div>
                <div>2. SCOPE OF LICENSE</div>
                <div>11. LEGAL COMPLIANCE</div>
                <div>3. TECHNICAL REQUIREMENTS</div>
                <div>12. CONTACT INFORMATION</div>
                <div>4. MAINTENANCE AND SUPPORT</div>
                <div>13. TERMINATION</div>
                <div>5. USE OF DATA</div>
                <div>14. THIRD-PARTY TERMS AND BENEFICIARY</div>
                <div>6. USER-GENERATED CONTRIBUTIONS</div>
                <div>15. INTELLECTUAL PROPERTY</div>
                <div>7. CONTRIBUTION LICENSE</div>
                <div>16. APPLICABLE LAW</div>
                <div>8. LIABILITY</div>
                <div>17. MISCELLANEOUS</div>
                <div>9. WARRANTY</div>
              </div>
            </section>

            {/* 1. THE APPLICATION */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4 bg-wellness-gradient bg-clip-text text-transparent">
                1. THE APPLICATION
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                Gutty ("Licensed Application") is a mobile app developed to serve as a gut health AI companion. It is customized for iOS devices and enables users to:
              </p>
              <ul className="list-disc list-inside text-lg text-gray-700 leading-relaxed mb-4 ml-4">
                <li>Take photos of their food</li>
                <li>Receive AI-powered analysis regarding gut health (glycemic impact, microbiome support, inflammation, and personalized nutrition)</li>
                <li>Track daily nutrition and gut health scores</li>
              </ul>
              <p className="text-lg text-gray-700 leading-relaxed">
                <strong>Note:</strong> The app does not provide medical advice. Users should consult a healthcare professional for medical concerns.
              </p>
            </section>

            {/* 2. SCOPE OF LICENSE */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4 bg-wellness-gradient bg-clip-text text-transparent">
                2. SCOPE OF LICENSE
              </h2>
              <div className="space-y-3 text-lg text-gray-700 leading-relaxed">
                <p><strong>2.1</strong> You may not share, sell, rent, lend, lease, or otherwise redistribute the Licensed Application without the Licensor's written consent, except as permitted by the Usage Rules.</p>
                <p><strong>2.2</strong> You may not reverse engineer, disassemble, decompile, or attempt to derive the source code of the app.</p>
                <p><strong>2.3</strong> You may only store backup copies on your own devices. You must delete the app before transferring or selling your device.</p>
                <p><strong>2.4</strong> Violation of these terms may result in legal action and liability for damages.</p>
                <p><strong>2.5</strong> The Licensor may revise these terms at any time.</p>
              </div>
            </section>

            {/* 3. TECHNICAL REQUIREMENTS */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4 bg-wellness-gradient bg-clip-text text-transparent">
                3. TECHNICAL REQUIREMENTS
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                The app requires iOS 17.0 or later and is compatible with iPhone and iPad devices.
              </p>
            </section>

            {/* 4. MAINTENANCE AND SUPPORT */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4 bg-wellness-gradient bg-clip-text text-transparent">
                4. MAINTENANCE AND SUPPORT
              </h2>
              <div className="space-y-3 text-lg text-gray-700 leading-relaxed">
                <p><strong>4.1</strong> The Licensor is solely responsible for support. Contact details are provided below.</p>
                <p><strong>4.2</strong> Apple has no responsibility for maintenance or support services.</p>
              </div>
            </section>

            {/* 5. USE OF DATA */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4 bg-wellness-gradient bg-clip-text text-transparent">
                5. USE OF DATA
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                By using Gutty, you agree to the collection and use of technical and personal data in accordance with the Privacy Policy: <Link to="/privacy" className="text-health-600 hover:text-health-700 underline">https://guttyapp.info/privacy</Link>
              </p>
            </section>

            {/* 6. USER-GENERATED CONTENT (PRIVATE USE) */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4 bg-wellness-gradient bg-clip-text text-transparent">
                6. USER-GENERATED CONTENT (PRIVATE USE)
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                You may upload photos and other content to the Licensed Application to receive personalized insights (e.g., for nutrition tracking or analysis). All such uploads ("User Content") are stored privately and are not visible to other users or the public.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                By uploading content, you represent and warrant that:
              </p>
              <ul className="list-disc list-inside text-lg text-gray-700 leading-relaxed mb-4 ml-4">
                <li>You have the legal right to use and upload the content</li>
                <li>The content does not contain illegal, harmful, or infringing material</li>
                <li>The content does not violate any applicable laws or third-party rights</li>
              </ul>
              <p className="text-lg text-gray-700 leading-relaxed">
                The Licensor will never publicly display your uploaded content without your explicit consent. However, the Licensor reserves the right to remove content or terminate your license if uploads violate the above terms or applicable laws.
              </p>
            </section>

            {/* 7. CONTRIBUTION LICENSE */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4 bg-wellness-gradient bg-clip-text text-transparent">
                7. CONTRIBUTION LICENSE
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                By posting Contributions, you grant the Licensor a worldwide, irrevocable, royalty-free license to use, modify, publish, and distribute your Contributions in any form or media. You retain ownership but waive any moral rights.
              </p>
            </section>

            {/* 8. LIABILITY */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4 bg-wellness-gradient bg-clip-text text-transparent">
                8. LIABILITY
              </h2>
              <div className="space-y-3 text-lg text-gray-700 leading-relaxed">
                <p><strong>8.1</strong> The Licensor is only liable for intentional misconduct or gross negligence. In cases of minor negligence, liability is limited to typical, foreseeable damages.</p>
                <p><strong>8.2</strong> The Licensor is not responsible for data loss or modifications caused by misuse or third-party alterations.</p>
              </div>
            </section>

            {/* 9. WARRANTY */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4 bg-wellness-gradient bg-clip-text text-transparent">
                9. WARRANTY
              </h2>
              <div className="space-y-3 text-lg text-gray-700 leading-relaxed">
                <p><strong>9.1</strong> The Licensed Application is warranted to be free from malware at the time of download and to function as described.</p>
                <p><strong>9.2</strong> The warranty does not apply to modified or misused copies.</p>
                <p><strong>9.3</strong> You must report defects within 30 days of discovery.</p>
                <p><strong>9.4</strong> If a defect is confirmed, the Licensor may either fix the issue or provide a replacement.</p>
                <p><strong>9.5</strong> If the app fails to meet the warranty, contact Apple for a refund. Apple has no other warranty obligations.</p>
                <p><strong>9.6</strong> Business users' claims expire after 12 months; consumer rights follow statutory limits.</p>
              </div>
            </section>

            {/* 10. PRODUCT CLAIMS */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4 bg-wellness-gradient bg-clip-text text-transparent">
                10. PRODUCT CLAIMS
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                Didar Korkembay is solely responsible for addressing:
              </p>
              <ul className="list-disc list-inside text-lg text-gray-700 leading-relaxed ml-4">
                <li>Product liability claims</li>
                <li>Legal or regulatory non-compliance</li>
                <li>Issues related to consumer protection or privacy laws</li>
              </ul>
            </section>

            {/* 11. LEGAL COMPLIANCE */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4 bg-wellness-gradient bg-clip-text text-transparent">
                11. LEGAL COMPLIANCE
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                You confirm you are not located in a country subject to U.S. embargoes or listed on any U.S. government restricted party list.
              </p>
            </section>

            {/* 12. CONTACT INFORMATION */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4 bg-wellness-gradient bg-clip-text text-transparent">
                12. CONTACT INFORMATION
              </h2>
              <div className="text-lg text-gray-700 leading-relaxed">
                <p>Didar Korkembay</p>
                <p>MUGHALZHAR 34,</p>
                <p>Astana, Akmola Oblast 010000,</p>
                <p>Kazakhstan</p>
                <p>📧 <a href="mailto:didar490@gmail.com" className="text-health-600 hover:text-health-700 underline">didar490@gmail.com</a></p>
              </div>
            </section>

            {/* 13. TERMINATION */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4 bg-wellness-gradient bg-clip-text text-transparent">
                13. TERMINATION
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                This license is valid until terminated. It will terminate automatically if you breach any terms. Upon termination, you must stop using the app and delete all copies.
              </p>
            </section>

            {/* 14. THIRD-PARTY TERMS AND BENEFICIARY */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4 bg-wellness-gradient bg-clip-text text-transparent">
                14. THIRD-PARTY TERMS AND BENEFICIARY
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                Apple and its subsidiaries are third-party beneficiaries of this Agreement and may enforce its terms against you.
              </p>
            </section>

            {/* 15. INTELLECTUAL PROPERTY */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4 bg-wellness-gradient bg-clip-text text-transparent">
                15. INTELLECTUAL PROPERTY
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                The Licensor is responsible for addressing intellectual property claims regarding the Licensed Application.
              </p>
            </section>

            {/* 16. APPLICABLE LAW */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4 bg-wellness-gradient bg-clip-text text-transparent">
                16. APPLICABLE LAW
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                This License Agreement is governed by the laws of the Republic of Kazakhstan, excluding its conflict of law rules.
              </p>
            </section>

            {/* 17. MISCELLANEOUS */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4 bg-wellness-gradient bg-clip-text text-transparent">
                17. MISCELLANEOUS
              </h2>
              <div className="space-y-3 text-lg text-gray-700 leading-relaxed">
                <p><strong>17.1</strong> If any term is held invalid, the remaining terms will remain enforceable. Invalid provisions will be replaced by ones closest in meaning and intent.</p>
                <p><strong>17.2</strong> Any changes to this agreement must be in writing. This clause may only be waived in writing.</p>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TermsOfUse; 