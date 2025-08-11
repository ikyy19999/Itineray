// document.addEventListener('DOMContentLoaded', function() {
//     // Disable right click, inspect element, etc.
//     document.addEventListener('contextmenu', function(e) {
//         e.preventDefault();
//         showInspectWarning();
//     });
//     // Disable keyboard shortcuts for inspect
//     document.addEventListener('keydown', function(e) {
//         // Disable F12
//         if (e.key === 'F12') {
//             e.preventDefault();
//             showInspectWarning();
//         }
//         // Disable Ctrl+Shift+I
//         if (e.ctrlKey && e.shiftKey && e.key === 'I') {
//             e.preventDefault();
//             showInspectWarning();
//         }
//         // Disable Ctrl+Shift+J
//         if (e.ctrlKey && e.shiftKey && e.key === 'J') {
//             e.preventDefault();
//             showInspectWarning();
//         }
//         // Disable Ctrl+Shift+C
//         if (e.ctrlKey && e.shiftKey && e.key === 'C') {
//             e.preventDefault();
//             showInspectWarning();
//         }
//         // Disable Ctrl+U
//         if (e.ctrlKey && e.key === 'u') {
//             e.preventDefault();
//             showInspectWarning();
//         }
//         // Disable Ctrl+S
//         if (e.ctrlKey && e.key === 's') {
//             e.preventDefault();
//             showInspectWarning();
//         }
//     });
//     // Function to show warning
//     function showInspectWarning() {
//         Swal.fire({
//             title: 'Restricted Access',
//             html: 'Contact the developer at <a href="mailto:support@rizkymaulana.web.id" style="color: #FFB7C5; text-decoration: underline;">this email</a> if you want to inspect.',
//             icon: 'warning',
//             confirmButtonText: 'OK',
//             confirmButtonColor: '#FFB7C5',
//             background: document.body.classList.contains('dark-mode') ? '#2d2d2d' : 'white',
//             color: document.body.classList.contains('dark-mode') ? '#f0f0f0' : '#3D3B40'
//         });
//     }
//     // Juga tambahkan kode untuk mencegah drag and drop image
//     document.addEventListener('dragstart', function(e) {
//         if (e.target.tagName === 'IMG') {
//             e.preventDefault();
//         }
//     });

//     // Create floating elements
//     const floatingElements = document.getElementById('floatingElements');
//     for (let i = 0; i < 15; i++) {
//         const element = document.createElement('div');
//         element.className = 'floating-element';
//         element.style.width = `${Math.random() * 20 + 10}px`;
//         element.style.height = element.style.width;
//         element.style.left = `${Math.random() * 100}vw`;
//         element.style.top = `${Math.random() * 100}vh`;
//         element.style.animationDuration = `${Math.random() * 30 + 30}s`;
//         element.style.animationDelay = `${Math.random() * 5}s`;
//         if (document.body.classList.contains('dark-mode')) {
//             element.style.background = `rgba(${Math.floor(Math.random() * 100 + 50)}, ${Math.floor(Math.random() * 100 + 50)}, ${Math.floor(Math.random() * 100 + 150)}, 0.3)`;
//         } else {
//             element.style.background = `rgba(${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}, 0.3)`;
//         }
//         floatingElements.appendChild(element);
//     }
//     // Create sparkle effect when clicking
//     document.addEventListener('click', function(e) {
//         if (e.target.id !== 'loveBtn') {
//             for (let i = 0; i < 5; i++) {
//                 const sparkle = document.createElement('div');
//                 sparkle.className = 'sparkle';
//                 sparkle.style.left = `${e.pageX - 5}px`;
//                 sparkle.style.top = `${e.pageY - 5}px`;
//                 sparkle.style.animationDelay = `${i * 0.1}s`;
//                 sparkle.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 75%)`;
//                 document.body.appendChild(sparkle);
//                 // Remove sparkle after animation
//                 setTimeout(() => {
//                     sparkle.remove();
//                 }, 2000);
//             }
//         }
//     });
//     // Dark Mode Toggle
//     const darkModeToggle = document.getElementById('darkModeToggle');
//     const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)');
//     // Check local storage or system preference
//     if (localStorage.getItem('darkMode') === 'enabled' || 
//         (localStorage.getItem('darkMode') === null && prefersDarkScheme.matches)) {
//         document.body.classList.add('dark-mode');
//     }
//     let clickCount = 0;
//     darkModeToggle.addEventListener('click', () => {
//         document.body.classList.toggle('dark-mode');
//         const isDarkMode = document.body.classList.contains('dark-mode');
//         localStorage.setItem('darkMode', isDarkMode ? 'enabled' : 'disabled');
//         // Add confetti effect when changing modes
//         createConfetti();
//         // Galaxy mode on 5th click
//         clickCount++;
//         if (clickCount === 5) {
//             // Contoh: Ubah semua warna ke mode galaxy
//             document.documentElement.style.setProperty('--blush', '#9d65ff');
//             document.documentElement.style.setProperty('--sage', '#6a3093');
//             createHeartConfetti();
//         }
//         setTimeout(() => { clickCount = 0; }, 1000);
//     });
//     // Listen for system theme changes
//     prefersDarkScheme.addListener(e => {
//         if (localStorage.getItem('darkMode')) return;
//         document.body.classList.toggle('dark-mode', e.matches);
//     });
//     // Tab navigation
//     const dayTabs = document.querySelectorAll('.day-tab');
//     dayTabs.forEach(tab => {
//         tab.addEventListener('click', () => {
//             dayTabs.forEach(t => t.classList.remove('active'));
//             document.querySelectorAll('.itinerary-content').forEach(content => {
//                 content.classList.remove('active');
//             });
//             tab.classList.add('active');
//             document.getElementById(tab.getAttribute('data-day')).classList.add('active');
//             // Add confetti effect when changing tabs
//             createConfetti();
//         });
//     });
//     // Love button
//     const loveBtn = document.getElementById('loveBtn');
//     loveBtn.addEventListener('click', () => {
//         const messages = [
//             "I love you more than words can express!",
//             "You're my favorite person in the world!",
//             "Every moment with you is magical!",
//             "I fall for you more every day!",
//             "My heart belongs to you forever!"
//         ];
//         const randomMessage = messages[Math.floor(Math.random() * messages.length)];
//         // Heart animation
//         loveBtn.innerHTML = '<i class="fas fa-heart" style="transform: scale(1.3); transition: all 0.3s ease;"></i><div class="heart-pulse"></div>';
//         setTimeout(() => {
//             loveBtn.innerHTML = '<i class="fas fa-heart"></i><div class="heart-pulse"></div>';
//         }, 300);
//         // Create heart-shaped confetti
//         createHeartConfetti();
//         // Show message with delay
//         setTimeout(() => {
//             alert(`💖 ${randomMessage} 💖`);
//         }, 500);
//     });
//     // Add image card flip functionality
//     const imageCards = document.querySelectorAll('.image-card');
//     imageCards.forEach(card => {
//         card.addEventListener('click', function() {
//             this.classList.toggle('flipped');
//         });
//     });
//     // Read More button functionality
//     const readMoreBtns = document.querySelectorAll('.read-more-btn');
//     readMoreBtns.forEach(btn => {
//         btn.addEventListener('click', function(e) {
//             e.stopPropagation();
//             const targetId = this.getAttribute('data-target');
//             const targetContent = document.getElementById(targetId);
//             targetContent.classList.toggle('active');
//             // Scroll to the expanded content if it's being opened
//             if (targetContent.classList.contains('active')) {
//                 targetContent.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
//             }
//         });
//     });
//     // Fixed download buttons functionality
//     const fixedDownloadExcel = document.getElementById('fixedDownloadExcel');
//     const fixedDownloadSpreadsheet = document.getElementById('fixedDownloadSpreadsheet');
//     fixedDownloadExcel.addEventListener('click', function() {
//         // Replace with your actual Excel file URL
//         const excelFileUrl = 'path/to/your/itinerary.xlsx';
//         const link = document.createElement('a');
//         link.href = excelFileUrl;
//         link.download = 'Fairytale_Journey_Itinerary.xlsx';
//         document.body.appendChild(link);
//         link.click();
//         document.body.removeChild(link);
//         // Confetti effect on download
//         createConfetti();
//     });
//     fixedDownloadSpreadsheet.addEventListener('click', function() {
//         // Replace with your actual CSV file URL
//         const csvFileUrl = 'path/to/your/itinerary.csv';
//         const link = document.createElement('a');
//         link.href = csvFileUrl;
//         link.download = 'Fairytale_Journey_Itinerary.csv';
//         document.body.appendChild(link);
//         link.click();
//         document.body.removeChild(link);
//         // Confetti effect on download
//         createConfetti();
//     });
//     // Create confetti effect
//     function createConfetti() {
//         const colors = document.body.classList.contains('dark-mode') 
//             ? ['#6a3093', '#a044ff', '#D4BEDF', '#A2C4B2', '#D4AF37']
//             : ['#FFB7C5', '#E8A87C', '#D4BEDF', '#A2C4B2', '#D4AF37'];
//         for (let i = 0; i < 50; i++) {
//             const confetti = document.createElement('div');
//             confetti.className = 'confetti';
//             confetti.style.left = `${Math.random() * 100}vw`;
//             confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
//             confetti.style.width = `${Math.random() * 10 + 5}px`;
//             confetti.style.height = confetti.style.width;
//             confetti.style.animationDuration = `${Math.random() * 3 + 2}s`;
//             document.body.appendChild(confetti);
//             // Remove confetti after animation
//             setTimeout(() => {
//                 confetti.remove();
//             }, 5000);
//         }
//     }
//     // Create heart-shaped confetti
//     function createHeartConfetti() {
//         const heartContainer = document.createElement('div');
//         heartContainer.style.position = 'fixed';
//         heartContainer.style.top = '0';
//         heartContainer.style.left = '0';
//         heartContainer.style.width = '100%';
//         heartContainer.style.height = '100%';
//         heartContainer.style.pointerEvents = 'none';
//         heartContainer.style.zIndex = '9999';
//         document.body.appendChild(heartContainer);
//         const heartCount = 20;
//         const colors = ['#FFB7C5', '#E8A87C', '#D4BEDF', '#A2C4B2', '#D4AF37'];
//         for (let i = 0; i < heartCount; i++) {
//             const heart = document.createElement('div');
//             heart.innerHTML = '❤️';
//             heart.style.position = 'absolute';
//             heart.style.fontSize = `${Math.random() * 20 + 15}px`;
//             heart.style.left = `${Math.random() * 100}vw`;
//             heart.style.top = '100vh';
//             heart.style.transform = 'translateY(0)';
//             heart.style.opacity = '1';
//             heart.style.animation = `heartFloat ${Math.random() * 3 + 2}s ease-out forwards`;
//             heart.style.color = colors[Math.floor(Math.random() * colors.length)];
//             heart.style.setProperty('--end-y', `${Math.random() * -100 - 50}vh`);
//             heart.style.setProperty('--end-x', `${Math.random() * 100 - 50}px`);
//             heartContainer.appendChild(heart);
//             // Remove heart after animation
//             setTimeout(() => {
//                 heart.remove();
//             }, 5000);
//         }
//         // Add CSS for heart animation
//         const style = document.createElement('style');
//         style.textContent = `
//             @keyframes heartFloat {
//                 0% {
//                     transform: translateY(0) translateX(0) rotate(0deg);
//                     opacity: 1;
//                 }
//                 100% {
//                     transform: translateY(var(--end-y)) translateX(var(--end-x)) rotate(360deg);
//                     opacity: 0;
//                 }
//             }
//         `;
//         document.head.appendChild(style);
//         // Remove container after all hearts are gone
//         setTimeout(() => {
//             heartContainer.remove();
//             style.remove();
//         }, 5000);
//     }
//     // Telegram Bot Functionality
//     const setupSuggestionForm = (formId, dayName) => {
//         const form = document.getElementById(formId);
//         const submitBtn = form.querySelector('.submit-btn');
//         const btnText = submitBtn.querySelector('.btn-text');
//         form.addEventListener('submit', async function(e) {
//             e.preventDefault();
//             // Get form values
//             const name = document.getElementById(`name${dayName}`).value.trim();
//             const destination = document.getElementById(`destination${dayName}`).value.trim();
//             const travelTime = document.getElementById(`travelTime${dayName}`).value;
//             const stayTime = document.getElementById(`stayTime${dayName}`).value;
//             const notes = document.getElementById(`notes${dayName}`).value.trim();
//             if (!name || !destination) {
//                 alert('Please fill in at least your name and destination');
//                 return;
//             }
//             // Replace with your actual Telegram bot token and chat ID
//             const botToken = '8472090032:AAH172QfDrXEHXYw-JPIOnMu5oBsiYobVOg';
//             const chatId = '-4938077194';
//             // Format the message
//             const message = `*New Suggestion for ${dayName.replace('Day', 'Day ')}*
// Name: ${name}
// Destination: ${destination}
// Travel Time: ${travelTime || 'Not specified'} minutes
// Stay Time: ${stayTime || 'Not specified'} minutes
// Notes: ${notes || 'None'}
// _Sent from Risaa Journey_`;
//             try {
//                 // UI Feedback
//                 btnText.textContent = 'Sending...';
//                 submitBtn.style.background = 'linear-gradient(135deg, var(--sage), var(--lavender))';
//                 // Send to Telegram
//                 const response = await fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
//                     method: 'POST',
//                     headers: {
//                         'Content-Type': 'application/json',
//                     },
//                     body: JSON.stringify({
//                         chat_id: chatId,
//                         text: message,
//                         parse_mode: 'Markdown'
//                     })
//                 });
//                 const data = await response.json();
//                 if (data.ok) {
//                     // Success - show confetti and reset form
//                     createConfetti();
//                     form.reset();
//                     btnText.textContent = 'Sent! ✓';
//                     // SweetAlert success message
//                     Swal.fire({
//                         title: 'Success!',
//                         text: 'Your suggestion has been sent!',
//                         icon: 'success',
//                         confirmButtonText: 'OK'
//                     });
//                     setTimeout(() => {
//                         btnText.textContent = 'Send to Telegram';
//                     }, 2000);
//                 } else {
//                     throw new Error(data.description || 'Failed to send');
//                 }
//             } catch (error) {
//                 console.error('Error sending to Telegram:', error);
//                 alert('Failed to send suggestion. Please try again later.');
//                 btnText.textContent = 'Send to Telegram';
//                 // SweetAlert error message
//                 Swal.fire({
//                     title: 'Error!',
//                     text: 'Failed to send suggestion. Please try again later.',
//                     icon: 'error',
//                     confirmButtonText: 'OK'
//                 });
//             }
//         });
//     };
//     // Initialize all suggestion forms
//     setupSuggestionForm('suggestionFormDay1', 'Day1');
//     setupSuggestionForm('suggestionFormDay2', 'Day2');
//     setupSuggestionForm('suggestionFormDay3', 'Day3');
//     // Photo Gallery Modal Functionality
//     const photoModal = document.getElementById('photoModal');
//     const galleryContainer = document.getElementById('galleryContainer');
//     const downloadAllBtn = document.getElementById('downloadAllBtn');
//     // Define photo collections for each location
//     const photoCollections = {
//         'Lempuyangan Station': [
//             'assets/Lempuyangan.avif',
//         ],
//         'RedDoorz Hotel': [
//             'assets/Reddorz.avif',
//         ],
//         'Sacred Place': [
//             'assets/Kuburan.avif',
//         ],
//         'Pasar Ngasem': [
//             'assets/Pasar Ngasem.avif',
//             'assets/ngasem 2.avif'
//         ],
//         'Taman Sari': [
//             'assets/Taman Sari.avif',
//             'assets/Taman Sari 2.avif',
//             'assets/Taman Sari 3.avif',
//             'assets/Taman Sari 4.avif',
//             'assets/Taman Sari 5.avif',
//             'assets/Taman Sari 6.avif',
//             'assets/Taman Sari 7.avif',
//             'assets/Taman Sari 8.avif',
//             'assets/Taman Sari 9.avif',
//             'assets/Taman Sari 10.avif',
//             'assets/Taman Sari 11.avif',
//             'assets/Taman Sari 12.mp4',
//             'assets/Taman-Sari-13.mp4',
//             'assets/Taman-Sari-14.mp4',
//         ],
//         'Yogyakarta Palace': [
//             'assets/Keraton Yogyakarta.avif',
//         ],
//         'Tempo Gelato': [
//             'assets/Gelato.avif',
//         ],
//         'PICTNIQ Land': [
//             'assets/PICTNIQ.avif',
//             'assets/PICTNIQ 2.avif',
//             'assets/PICTNIQ 3.avif',
//             'assets/PICTNIQ 4.avif',
//             'assets/PICTNIQ 5.avif',
//             'assets/PICTNIQ 6.avif',
//             'assets/PICTNIQ 7.avif',
//             'assets/PICTNIQ 8.avif',
//             'assets/PICTNIQ 9.avif',
//             'assets/PICTNIQ 10.avif',
//             'assets/PICTNIQ 11.avif',
//             'assets/PICTNIQ 12.avif',
//             'assets/PICTNIQ 13.avif',
//             'assets/PICTNIQ 14.avif',
//             'assets/PICTNIQ 15.avif',
//             'assets/PICTNIQ 16.avif',
//             'assets/PICTNIQ 17.avif',
//             'assets/PICTNIQ 18.avif',
//             'assets/PICTNIQ 19.avif',
//             'assets/PICTNIQ 20.avif',
//             'assets/PICTNIQ 21.avif',
//             'assets/PICTNIQ 22.avif',
//             'assets/PICTNIQ 23.avif',
//             'assets/PICTNIQ 24.avif',
//             'assets/PICTNIQ 25.avif',
//             'assets/PICTNIQ 26.avif',
//             'assets/PICTNIQ 27.avif',
//             'assets/PICTNIQ 28.avif',
//             'assets/PICTNIQ 29.avif',
//             'assets/PICTNIQ 30.avif',
//             'assets/PICTNIQ 31.avif',
//         ],
//         'Pasar Prawirotaman': [
//             'assets/Pasar prawirotaman.avif',
//         ],
//         'Malioboro Street': [
//             'assets/Malioboro.avif',
//             'assets/Malioboro 2.avif',
//             'assets/Malioboro 3.mp4',
//         ],
//         'Pasar Beringharjo': [
//             'assets/Pasar Beringharjo Yogyakarta.avif',
//         ],
//         'Kano Maritim Baros': [
//             'assets/KANO MARITIM BAROS.avif',
//         ],
//         'The Rock Burger Timoho': [
//             'assets/The Rock Burger Timoho.avif',
//             'assets/Burger.avif',
//             'assets/burger 2.avif'
//         ],
//         'Jogja Heritage Track': [
//             'assets/Tugu Jogja.avif',
//             'assets/Jogja Heritage 2.avif',
//             'assets/Jogja Heritage 3.avif',
//             'assets/Jogja Heritage 4.avif',
//             'assets/Jogja Heritage 5.avif',
//             'assets/Jogja Heritage 6.avif',
//             'assets/Jogja Heritage 7.avif',
//             'assets/Jogja Heritage 8.avif',
//             'assets/Jogja Heritage 9.avif',
//             'assets/Jogja Heritage 10.avif',
//             'assets/Jogja Heritage 11.avif',
//             'assets/Jogja Heritage 12.avif',
//         ],
//         'L\'Union Pizza': [
//             'assets/L\'Union Pizza.avif',
//         ]
//     };
//     // Function to open modal with specific photos
//     function openPhotoGallery(title) {
//         const mediaItems = photoCollections[title] || [];
//         // Clear previous gallery items
//         galleryContainer.innerHTML = '';
//         // Set modal title
//         document.querySelector('.modal-title').textContent = `${title} Media`;
//         // Add photos and videos to gallery
//         mediaItems.forEach((mediaUrl, index) => {
//             const galleryItem = document.createElement('div');
//             galleryItem.className = 'gallery-item';
//             // Check if it's a video (by file extension)
//             const isVideo = mediaUrl.toLowerCase().endsWith('.mp4') || 
//                            mediaUrl.toLowerCase().endsWith('.webm') || 
//                            mediaUrl.toLowerCase().endsWith('.ogg');
//             if (isVideo) {
//                 galleryItem.innerHTML = `
//                     <video class="gallery-video" controls>
//                         <source src="${mediaUrl}" type="video/mp4">
//                         Your browser does not support the video tag.
//                     </video>
//                     <div class="video-icon">
//                         <i class="fas fa-play"></i>
//                     </div>
//                     <button class="download-btn" data-url="${mediaUrl}" data-filename="${title.replace(/\s+/g, '-')}-${index + 1}.mp4">
//                         <i class="fas fa-download"></i>
//                     </button>
//                 `;
//             } else {
//                 galleryItem.innerHTML = `
//                     <img src="${mediaUrl}" alt="${title} photo ${index + 1}" class="gallery-img">
//                     <button class="download-btn" data-url="${mediaUrl}" data-filename="${title.replace(/\s+/g, '-')}-${index + 1}.jpg">
//                         <i class="fas fa-download"></i>
//                     </button>
//                 `;
//             }
//             galleryContainer.appendChild(galleryItem);
//         });
//         // Show modal
//         photoModal.style.display = 'block';
//         document.body.style.overflow = 'hidden';
//     }
//     // Close modal
//     function closeModal() {
//         photoModal.style.display = 'none';
//         document.body.style.overflow = 'auto';
//     }
//     // Event listeners for modal
//     document.querySelector('.close-modal').addEventListener('click', closeModal);
//     window.addEventListener('click', (e) => {
//         if (e.target === photoModal) {
//             closeModal();
//         }
//     });
//     // Add click handler to all "Learn More" buttons
//     document.querySelectorAll('.read-more-btn').forEach(btn => {
//         btn.addEventListener('click', function(e) {
//             e.preventDefault();
//             const title = this.closest('.image-overlay').querySelector('.image-title').textContent;
//             openPhotoGallery(title);
//         });
//     });
//     // Download single image or video
//     galleryContainer.addEventListener('click', (e) => {
//         if (e.target.closest('.download-btn')) {
//             const btn = e.target.closest('.download-btn');
//             const mediaUrl = btn.getAttribute('data-url');
//             const fileName = btn.getAttribute('data-filename');
//             // Create a temporary link to trigger download
//             const link = document.createElement('a');
//             link.href = mediaUrl;
//             link.download = fileName;
//             document.body.appendChild(link);
//             link.click();
//             document.body.removeChild(link);
//             // Show feedback
//             const originalHTML = btn.innerHTML;
//             btn.innerHTML = '<i class="fas fa-check"></i>';
//             setTimeout(() => {
//                 btn.innerHTML = originalHTML;
//             }, 1000);
//         }
//     });
//     // Download all images and videos as ZIP
//     downloadAllBtn.addEventListener('click', async function() {
//         const title = document.querySelector('.modal-title').textContent.replace(' Media', '');
//         const mediaItems = photoCollections[title] || [];
//         if (mediaItems.length === 0) {
//             alert('No media available to download');
//             return;
//         }
//         // Show loading indicator
//         const loading = document.createElement('div');
//         loading.className = 'loading';
//         loading.innerHTML = `
//             <div class="loading-spinner"></div>
//             <p>Preparing your download...</p>
//         `;
//         document.body.appendChild(loading);
//         try {
//             // Use JSZip library to create a zip file
//             const zip = new JSZip();
//             const mediaFolder = zip.folder(title.replace(/\s+/g, '-'));
//             // Add each media item to the zip
//             const downloadPromises = mediaItems.map(async (url, index) => {
//                 try {
//                     const response = await fetch(url);
//                     if (!response.ok) throw new Error(`Failed to fetch ${url}`);
//                     const blob = await response.blob();
//                     // Determine file extension
//                     const isVideo = url.toLowerCase().endsWith('.mp4') || 
//                                    url.toLowerCase().endsWith('.webm') || 
//                                    url.toLowerCase().endsWith('.ogg');
//                     const extension = isVideo ? '.mp4' : '.jpg';
//                     mediaFolder.file(`${title.replace(/\s+/g, '-')}-${index + 1}${extension}`, blob);
//                 } catch (error) {
//                     console.error(`Error downloading ${url}:`, error);
//                     // Skip this media item if there's an error
//                 }
//             });
//             await Promise.all(downloadPromises);
//             // Generate the zip file
//             const content = await zip.generateAsync({ type: 'blob' });
//             // Create download link
//             const zipUrl = URL.createObjectURL(content);
//             const link = document.createElement('a');
//             link.href = zipUrl;
//             link.download = `${title.replace(/\s+/g, '-')}-media.zip`;
//             document.body.appendChild(link);
//             link.click();
//             document.body.removeChild(link);
//             // Clean up
//             URL.revokeObjectURL(zipUrl);
//         } catch (error) {
//             console.error('Error creating ZIP file:', error);
//             alert('Failed to create download. Please try again.');
//         } finally {
//             // Hide loading indicator
//             loading.remove();
//         }
//     });
//     // Animate elements when they come into view
//     const animateOnScroll = () => {
//         const elements = document.querySelectorAll('.timeline-item, .suggestion-form, .day-title');
//         elements.forEach(element => {
//             const elementPosition = element.getBoundingClientRect().top;
//             const screenPosition = window.innerHeight / 1.3;
//             if (elementPosition < screenPosition) {
//                 element.style.opacity = '1';
//                 element.style.transform = 'translateY(0)';
//             }
//         });
//     };
//     // Set initial state for animated elements
//     document.querySelectorAll('.timeline-item, .suggestion-form, .day-title').forEach(el => {
//         el.style.opacity = '0';
//         el.style.transform = 'translateY(20px)';
//         el.style.transition = 'all 0.6s ease';
//     });
//     window.addEventListener('scroll', animateOnScroll);
//     animateOnScroll(); // Run once on load

//     // Tampilkan popup saat halaman loaded
//     showWelcomePopup();
    
//     // Function buat nampilin popup
//     function showWelcomePopup() {
//         const popup = document.getElementById('welcome-popup');
//         const mainContent = document.getElementById('main-content') || document.body;
        
//         if (popup) {
//             // Tampilkan popup
//             popup.style.display = 'flex';
//             popup.style.opacity = '0';
//             popup.style.transition = 'opacity 0.3s ease';
            
//             setTimeout(() => {
//                 popup.style.opacity = '1';
//             }, 100);
            
//             // Tambahkan class untuk blur background
//             document.body.classList.add('popup-active');
//             if (mainContent) {
//                 mainContent.classList.add('blur-background');
//             }
//         }
//     }
    
//     // Function buat nutup popup
//     function closeWelcomePopup() {
//         const popup = document.getElementById('welcome-popup');
//         const mainContent = document.getElementById('main-content') || document.body;
        
//         if (popup) {
//             popup.style.opacity = '0';
            
//             setTimeout(() => {
//                 popup.style.display = 'none';
//                 // Remove blur effect
//                 document.body.classList.remove('popup-active');
//                 if (mainContent) {
//                     mainContent.classList.remove('blur-background');
//                 }
//             }, 300);
//         }
//     }
    
//     // Event listener buat close button
//     const closeBtn = document.querySelector('.close-popup');
//     if (closeBtn) {
//         closeBtn.addEventListener('click', closeWelcomePopup);
//     }
    
//     // Close popup kalo klik di luar area content
//     const popup = document.getElementById('welcome-popup');
//     if (popup) {
//         popup.addEventListener('click', function(e) {
//             if (e.target === popup) {
//                 closeWelcomePopup();
//             }
//         });
//     }
    
//     // Close popup pake ESC key
//     document.addEventListener('keydown', function(e) {
//         if (e.key === 'Escape') {
//             closeWelcomePopup();
//         }
//     });
// });