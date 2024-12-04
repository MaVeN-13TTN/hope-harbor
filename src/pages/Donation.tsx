import { useState } from 'react';

interface DonationFormData {
  amount: string;
  customAmount: string;
  firstName: string;
  lastName: string;
  email: string;
  message: string;
  isMonthly: boolean;
}

export const Donation: React.FC = () => {
  const [formData, setFormData] = useState<DonationFormData>({
    amount: '',
    customAmount: '',
    firstName: '',
    lastName: '',
    email: '',
    message: '',
    isMonthly: false,
  });

  const predefinedAmounts = ['10', '25', '50', '100'];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
      ...(name === 'amount' ? { customAmount: '' } : {}),
      ...(name === 'customAmount' ? { amount: '' } : {})
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement donation processing logic
    console.log('Donation form submitted:', formData);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Make a Donation</h1>
          <p className="text-lg text-gray-600">
            Your generosity helps us make a difference in our community
          </p>
        </div>

        <form onSubmit={handleSubmit} className="bg-white shadow-lg rounded-lg p-8">
          {/* Donation Amount Section */}
          <div className="mb-8">
            <label className="block text-gray-700 text-lg font-semibold mb-4">
              Select Donation Amount
            </label>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
              {predefinedAmounts.map((amount) => (
                <button
                  key={amount}
                  type="button"
                  className={`py-3 px-4 rounded-lg border ${
                    formData.amount === amount
                      ? 'bg-blue-600 text-white border-blue-600'
                      : 'bg-white text-gray-700 border-gray-300 hover:border-blue-500'
                  } transition-colors duration-200`}
                  onClick={() => setFormData(prev => ({ ...prev, amount, customAmount: '' }))}
                >
                  ${amount}
                </button>
              ))}
            </div>
            <div className="mt-4">
              <label className="block text-gray-700 mb-2">Custom Amount</label>
              <div className="relative">
                <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500">
                  $
                </span>
                <input
                  type="number"
                  name="customAmount"
                  value={formData.customAmount}
                  onChange={handleInputChange}
                  className="w-full pl-8 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Enter custom amount"
                  min="1"
                />
              </div>
            </div>
          </div>

          {/* Monthly Donation Option */}
          <div className="mb-8">
            <label className="flex items-center space-x-3">
              <input
                type="checkbox"
                name="isMonthly"
                checked={formData.isMonthly}
                onChange={(e) => setFormData(prev => ({ ...prev, isMonthly: e.target.checked }))}
                className="h-5 w-5 text-blue-600 rounded focus:ring-blue-500"
              />
              <span className="text-gray-700">Make this a monthly donation</span>
            </label>
          </div>

          {/* Personal Information */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div>
              <label className="block text-gray-700 mb-2">First Name</label>
              <input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                required
              />
            </div>
            <div>
              <label className="block text-gray-700 mb-2">Last Name</label>
              <input
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                required
              />
            </div>
          </div>

          <div className="mb-8">
            <label className="block text-gray-700 mb-2">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
              required
            />
          </div>

          <div className="mb-8">
            <label className="block text-gray-700 mb-2">Message (Optional)</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
              rows={4}
              placeholder="Share why you're making this donation..."
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors duration-200 font-semibold text-lg"
          >
            Complete Donation
          </button>
        </form>
      </div>
    </div>
  );
};
