document.getElementById('submit-comment').addEventListener('click', function() {
    var commentInput = document.getElementById('comment-input');
    var commentText = commentInput.value;

    if (commentText.trim() !== "") {
        var commentsSection = document.getElementById('comments-section');

        var newComment = document.createElement('div');
        newComment.className = 'comment';
        newComment.textContent = commentText;

        commentsSection.appendChild(newComment);

        commentInput.value = "";
    }
});