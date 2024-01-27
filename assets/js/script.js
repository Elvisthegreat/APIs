const API_KEY = 'HqTiJ - UrT - H5q87twsuIDhNKRrs';
const API_URL = "https://ci-jshint.herokuapp.com/api";
const resultsModal = new bootstrap.Modal(document.getElementById("resultsModal"));

document.getElementById('status').addEventListener('click', e => getStatus(e));