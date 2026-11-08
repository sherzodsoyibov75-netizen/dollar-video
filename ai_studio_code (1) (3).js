rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /users/{userId} {
      allow read, write: if request.auth != null;
    }
    match /videos/{videoId} {
      allow read: if request.auth != null;
      allow write: if request.auth != null; // Admin tekshiruvi qo'shish mumkin
    }
    match /withdrawals/{id} {
      allow read, write: if request.auth != null;
    }
  }
}