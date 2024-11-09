<template>
  <div id="form" class="space-y-10 pb-[10%]">
    <h1 class="heading-medium text-center">RSVP</h1>
    <p class="mx-auto max-w-2xl text-base lg:max-w-4xl">
      Phasellus accumsan neque viverra ut sem aliquam purus rhoncus, morbi. Ut
      in eget leo dui nunc. Tortor viverra magna dignissim sit. Libero eu
      euismod risus, mauris etiam ut morbi amet in. Tortor duis dignissim
      adipiscing sem.
    </p>

    <form class="mx-auto max-w-xl space-y-4 rounded-lg">
      <!-- Text Inputs -->
      <div class="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <template v-for="input in textInputs" :key="input">
          <div
            class="col-span-1 flex flex-col"
            :class="{ '!col-span-full': input.gridFull }"
          >
            <label :for="input.name" class="mb-1 block font-medium">
              {{ input.label
              }}<span v-if="input.required" class="text-red-500">*</span>
            </label>
            <input
              :id="input.name"
              v-model="formData[input.name as keyof FormData]"
              :type="input.type"
              :required="input.required"
              class="w-full border border-primary-950 bg-transparent px-1.5 py-3 focus:border-0 focus:outline-none"
            />
          </div>
        </template>
      </div>

      <!-- Radio Buttons -->
      <div class="space-y-2">
        <h3 class="font-medium">
          Number of Guests<span class="text-red-500">*</span>
        </h3>
        <div class="grid grid-cols-2 gap-2 sm:grid-cols-4">
          <template v-for="guest in guestOptions" :key="guest">
            <label
              class="flex cursor-pointer items-center justify-start space-x-2 border border-primary-950 py-3 pe-4 ps-2"
            >
              <input
                type="radio"
                name="guests"
                :value="guest.value"
                v-model="formData.guests"
                class="form-radio size-5 bg-transparent text-primary-950"
              />
              <span>{{ guest.label }}</span>
            </label>
          </template>
        </div>
      </div>

      <!-- Checkboxes -->
      <div class="space-y-2">
        <h3 class="font-medium">
          Attendance<span class="text-red-500">*</span>
        </h3>
        <div class="grid grid-cols-1 gap-2 sm:grid-cols-6">
          <template v-for="(option, index) in attendanceOptions" :key="index">
            <div
              :class="
                index in [0, 1]
                  ? 'grid-cols-1 sm:col-span-3'
                  : 'grid-cols-1 sm:col-span-2'
              "
            >
              <label
                class="flex cursor-pointer items-center justify-start space-x-2 border border-primary-950 py-3 pe-4 ps-2"
              >
                <input
                  type="checkbox"
                  :value="option.value"
                  v-model="formData.attendance"
                  class="form-checkbox size-5 rounded bg-transparent text-primary-950"
                />
                <span>{{ option.label }}</span>
              </label>
            </div>
          </template>
        </div>
      </div>

      <!-- Submit Button -->
      <div class="h-10 text-end">
        <button
          v-if="isFormValid"
          type="submit"
          @click="handleSubmit"
          class="bg-primary-700 px-10 py-2 text-white duration-300 ease-in-out hover:bg-primary-950"
        >
          Submit
        </button>
      </div>
    </form>
  </div>
</template>

<script setup lang="ts">
  import { computed, ref } from 'vue';

  interface FormData {
    firstName: string;
    lastName: string;
    email: string;
    guests: string;
    attendance: string[];
  }

  interface TextInput {
    name: string;
    label: string;
    type: string;
    required: boolean;
    gridFull?: boolean;
  }
  interface GuestOption {
    label: string;
    value: string;
  }

  interface AttendanceOption {
    label: string;
    value: string;
  }

  const textInputs: TextInput[] = [
    {
      name: 'firstName',
      label: 'First Name',
      type: 'text',
      required: true,
    },
    {
      name: 'lastName',
      label: 'Last Name',
      type: 'text',
      required: true,
    },
    {
      name: 'email',
      label: 'Email Address',
      type: 'email',
      required: true,
      gridFull: true,
    },
  ];

  const guestOptions: GuestOption[] = [
    { label: 'One', value: '1' },
    { label: 'Two', value: '2' },
    { label: 'Three', value: '3' },
    { label: 'Four', value: '4' },
  ];

  const attendanceOptions: AttendanceOption[] = [
    { label: 'Accept with pleasure', value: 'accept' },
    { label: 'Regretfully Decline', value: 'decline' },
    { label: 'Rehearsal Dinner', value: 'rehearsal' },
    { label: 'Ceremony', value: 'ceremony' },
    { label: 'Reception', value: 'reception' },
  ];

  // Reactive data for the form
  const formData = ref<FormData>({
    firstName: '',
    lastName: '',
    email: '',
    guests: '',
    attendance: [],
  });

  const isValidEmail = (email: string): boolean => {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
  };

  const isFormValid = computed(() => {
    // Check if all required fields are filled
    const requiredFieldsFilled =
      formData.value.firstName &&
      formData.value.lastName &&
      formData.value.email &&
      formData.value.guests;

    // Check if email is valid
    const validEmail = isValidEmail(formData.value.email);

    // Check if at least one attendance option is selected
    const hasAttendanceSelection = formData.value.attendance.length > 0;

    return requiredFieldsFilled && validEmail && hasAttendanceSelection;
  });

  const handleSubmit = () => {
    if (!isFormValid.value) {
      alert('Please fill in all required fields.');
      return;
    }

    console.log('Form Data:', formData.value);
    alert('Form submitted successfully!');
  };
</script>
