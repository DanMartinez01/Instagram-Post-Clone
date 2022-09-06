const comment = document.getElementById('comment');
const form = document.getElementById('form');
// form validation

form.addEventListener('click', (e) => {
    if (comment.value === '' || comment.value == null) {
        e.preventDefault();
    }
});


// add new comments
const newComment = [];
const addComments = () => {
    if (comment.value !== '' && comment.value !== null) {
        newComment.push(comment.value);
        const myDiv = document.getElementById('comments');
        const user = document.createElement('p');
        user.textContent = `User :  ${comment.value}`;
        myDiv.append(user);
        comment.value = '';
    }
};

const img = document.getElementById('heartid');
let toggle = true;

img.addEventListener('click', () => {
    //toggle

    if (toggle) {
        img.src = 'assets/red-heart-icon.svg';
    } else {
        img.src = 'assets/heart.svg';
    }
    toggle = !toggle;
});
