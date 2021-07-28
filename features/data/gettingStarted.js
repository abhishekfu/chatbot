const data = [
    {
        question: 'When do I need to activate Cloud Storage and enable billing?',
        answer: '<p>If you want to create buckets, store data, or control who can access your data, you must activate Cloud Storage and enable billing.</p>'
    },
    {
        question: 'How do I sign up?',
        answer: '<p>Sign up for Cloud Storage by turning on the Cloud Storage service in the <a href="https://console.cloud.google.com/getting-started" target="_blank">Google Cloud Console.</a></p>'
    },
    {
        question: "Do I need to activate Cloud Storage and turn on billing if I was granted access to someone else's bucket?",
        answer: '<p>No, in this case another individual has already set up a Google Cloud project and either added you as a project team member or granted you permission to their buckets and objects. Once you authenticate, typically with your Google account, you can read or write data according to the access that you were granted.</p><br/><p>For information about adding project team members, see <a href="https://cloud.google.com/storage/docs/cloud-console#_addingmember" target="_blank">Adding a member to a project.</a></p>'
    },
    {
        question: 'I am just trying to download or access some data that is freely available to the public. How can I do that?',
        answer: '<p>Simply follow the <a href="https://cloud.google.com/storage/docs/access-public-data" target="_blank">Accessing public data guide</a>, which offers several methods for accessing freely available, public data that is stored in Cloud Storage. Depending on the method you use, you do not need to turn on billing, create credentials, or authenticate to Cloud Storage.</p>'
    },
    {
        question: "I'm developing a library or tool for Cloud Storage and I want to sell it on the Internet. Is this okay?",
        answer: '<p>Yes!</p>'
    }
];

module.exports =  data;