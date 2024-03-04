import OTP from '../Model/otpModel.js';

const otpController = {
  saveOTP: async (req, res) => {
    const { phoneNo, otp } = req.body;

    try {
      const existingOTP = await OTP.findOne({ phoneNo });
      if (existingOTP) {
        return res.status(400).json({
          message: 'OTP already saved for this phone number. Please check your phone.',
        });
      }

      let otpRecord = new OTP({
        phoneNo,
        otp,
      });
      await otpRecord.save();

      return res.status(200).json({ message: 'OTP saved successfully.' });
    } catch (error) {
      console.error('Error saving OTP:', error);
      return res.status(500).json({ message: 'Internal Server Error' });
    }
  },

  getOTPByPhoneNo: async (req, res) => {
    const { phoneNo } = req.params;

    try {
      const otpRecord = await OTP.findOne({ phoneNo });
      if (!otpRecord) {
        return res.status(404).json({ message: 'No active OTP found for this phone number.' });
      }

      return res.status(200).json({ phoneNo: otpRecord.phoneNo, otp: otpRecord.otp });
    } catch (error) {
      console.error('Error getting OTP by phone number:', error);
      return res.status(500).json({ message: 'Internal Server Error' });
    }
  },
};

export default otpController;
