const { default: mongoose, Schema } = require("mongoose");
const bcrypt = require("bcrypt");

const addressSchema = new Schema({
  addressId: {
    type: Number,
    required: true,
  },
  street: String,
  city: String,
  state: String,
  label: String,
  isDefault: {
    type: Boolean,
    default: false,
  },
});

const userSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: [true, "Email is required."],
      unique: [true, "Email already exists."],
      match: [/^\S+@\S+\.\S+$/, "Invalid email address."],
    },
    password: {
      type: String,
      required: true,
    },
    phone: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      enum: ["customer", "admin"],
      default: "customer",
    },
    addresses: [addressSchema],
  },
  { timestamps: true }
);

userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return next();

  try {
    this.password = await bcrypt.hash(this.password, 12);
    next();
  } catch (err) {
    next(error);
  }
});

userSchema.methods.comparePassword = async function (candidatePassword) {
  return await bcrypt.compare(candidatePassword, this.password);
};

const db = mongoose.connection.useDb("shopverse");
const userModel = db.model("user", userSchema);

module.exports = userModel;
