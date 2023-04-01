const mongoose = require("mongoose");
const mongoose_delete = require("mongoose-delete");
const bcrypt = require("bcrypt");

const userSchema = new mongoose.Schema(
  {
    fullName: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      index: { unique: true },
    },
    bornDate: {
      type: String,
      required: true,
    },
    gender: {
      type: String,
      required: true,
      trim: true,
      lowercase: true,
    },
    phone: {
      type: Number,
      required: true,
      trim: true,
      unique: true,
      lowercase: true,
      index: { unique: true },
    },
    address: {
      street: {
        type: String,
        required: true,
      },
      number: {
        type: String,
        required: true,
      },
      departament: {
        type: String,
        required: true,
      },
      zipCode: {
        type: String,
        required: true,
      },
    },
    email: {
      type: String,
      required: true,
      trim: true,
      unique: true,
      lowercase: true,
      index: { unique: true },
    },
    password: {
      type: String,
      required: true,
    },
    rol: {
        type: String,
        required: true,
        lowercase: true,
        default: "user",
      },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

userSchema.pre("save", async function (next) {
  const user = this;

  if (!user.isModified("password")) return next();

  try {
    const salt = await bcrypt.genSalt(10);
    user.password = await bcrypt.hash(user.password, salt);
    next();
  } catch (error) {
    throw new Error("Password encoding error: " + error.message);
  }
});

userSchema.methods.comparePassword = async function (candidatePassword) {
  return await bcrypt.compare(candidatePassword, this.password);
};

userSchema.plugin(mongoose_delete, { overrideMethods: "all" });

module.exports = mongoose.model("User", userSchema);
