<template>
  <div class="game-search-wrapper">
    <div class="game-search-container">
      <!-- القائمة المنسدلة للتصنيفات -->
      <div class="game-search-select-wrapper">
        <select class="game-search-select">
          <option disabled selected>النوع</option>
          <option>الكل</option>
          <option>HTML</option>
          <option>Vue</option>
          <option>Tailwint</option>
        </select>
        <div class="game-search-select-icon">
          <svg class="game-search-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
          </svg>
        </div>
      </div>
      <!-- حقل البحث -->
      <div class="game-search-input-wrapper">
        <input
          type="text"
          placeholder="Write name of prject here  "
          class="game-search-input"
        />
        <div class="game-search-input-icon">
          <svg xmlns="http://www.w3.org/2000/svg" class="game-search-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-4.35-4.35M10 18a8 8 0 100-16 8 8 0 000 16z" />
          </svg>
        </div>
      </div>
      <!-- زر البحث -->
      <button class="game-search-button">
        Search
      </button>
    </div>
  </div>
</template>
<script setup>
</script>
<style scoped>
/* Wrapper */
.game-search-wrapper {
  padding: 1rem;
  border-radius: 0.5rem;
  width: 100%;
  display: flex;
  justify-content: center;
}
/* Container inside */
.game-search-container {
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
  width: 100%;
  max-width: 768px;
}
@media (min-width: 768px) {
  .game-search-container {
    flex-direction: row;
    align-items: center;
  }
}
/* Select wrapper */
.game-search-select-wrapper {
  position: relative;
  width: 100%;
}
@media (min-width: 768px) {
  .game-search-select-wrapper {
    width: 120px;
  }
}
/* Select */
.game-search-select {
  appearance: none;
  background-color: #1f2937; /* gray-800 */
  color: white;
  padding: 0.8rem 1rem;
  border-radius: 0.5rem;
  width: 100%;
  outline: none;
  border: none;
}
@media (min-width: 768px) {
  .game-search-select {
    border-radius: 0.5rem 0 0 0.5rem;
  }
}
/* Select arrow icon */
.game-search-select-icon {
  position: absolute;
  right: 0.5rem;
  top: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  pointer-events: none;
  color: white;
}
/* Input wrapper */
.game-search-input-wrapper {
  position: relative;
  flex: 1;
  width: 100%;
}
/* Input field */
.game-search-input {
  background-color: #1f2937;
  color: white;
  padding: 0.8rem 0.75rem;
  padding-right: 2.5rem;
  border-radius: 0.5rem;
  width: 100%;
  outline: none;
  border: none;
  text-align: right;
  margin-bottom: 0 !important;
}
@media (min-width: 768px) {
  .game-search-input {
    border-radius: 0 0.5rem 0.5rem 0;
  }
}
/* Search icon in input */
.game-search-input-icon {
  position: absolute;
  left: 0.75rem;
  top: 50%;
  transform: translateY(-50%);
  color: white;
  pointer-events: none;
}
/* Search button */
.game-search-button {
  background-color: #1f2937;
  color: white;
  padding: 0.8rem 1.5rem;
  border-radius: 0.5rem;
  transition: all 0.3s ease;
  width: 100%;
  margin-top: 0.5rem;
  cursor: pointer;
  border: none;
  text-align: center;
}
.game-search-button:hover {
  background-color: white;
  color: #1f2937;
}
@media (min-width: 768px) {
  .game-search-button {
    width: auto;
    margin-top: 0;
    margin-left: 0.5rem;
  }
}
/* General icon style */
.game-search-icon {
  width: 1rem;
  height: 1rem;
  margin-top:5px;
}
</style>