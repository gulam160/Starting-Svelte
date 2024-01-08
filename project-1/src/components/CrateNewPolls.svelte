<script>
  import Button from "./Button.svelte";
  import { createEventDispatcher } from "svelte";

  let values = { question: "", answer_a: "", answer_b: "" };
  let errors = { question: "", answer_a: "", answer_b: "" };
  let valid = false;

  const dispatch = createEventDispatcher();
  const handleSubmit = () => {
    valid = true;

    switch (valid) {
      case values.question.trim() < 5:
        valid = false;
        errors.question = "Question must be atleast 5 character long";
        return;
      case values.answer_a.trim().length < 1:
        valid = false;
        errors.answer_a = "Option A cant be Empty";
        return;
      case values.answer_b.trim().length < 1:
        valid = false;
        errors.answer_b = "Option B cant be Empty";
        return;
      default:
        errors.question = "";
        errors.answer_a = "";
        errors.answer_b = "";
    }

    if (valid) {
      const polls = { ...values, voteA: 0, voteB: 0, id: Math.random() };
      dispatch("addPoll", polls);
    }
  };
</script>

<form on:submit|preventDefault={handleSubmit}>
  <div class="form-field">
    <label for="question">Question: </label>
    <input
      type="text"
      id="question"
      placeholder="Enter question"
      bind:value={values.question}
    />
    <p class="error">{errors.question}</p>
  </div>
  <div class="form-field">
    <label for="answer-a">Option A: </label>
    <input
      type="text"
      id="answer-a"
      placeholder="Enter option A"
      bind:value={values.answer_a}
    />
    <p class="error">{errors.answer_a}</p>
  </div>
  <div class="form-field">
    <label for="answer-b">Option B: </label>
    <input
      type="text"
      id="answer-b"
      placeholder="Enter option B"
      bind:value={values.answer_b}
    />
    <p class="error">{errors.answer_b}</p>
  </div>
  <Button flat>Add Poll</Button>
</form>

<style>
  form {
    width: 400px;
    margin: 0 auto;
    text-align: center;
  }
  .form-field {
    margin: 18px auto;
  }
  input {
    width: 100%;
    border-radius: 5px;
    outline: none;
    padding: 8px 5px;
    border: 1px solid #777;
    font-size: 16px;
  }
  input::placeholder {
    font-size: 16px;
  }
  label {
    margin: 5px auto;
    text-align: left;
    display: inline-block;
    width: 100%;
  }
  .error {
    color: red;
    font-size: 12px;
    text-align: left;
    margin-top: 5px;
  }
</style>
