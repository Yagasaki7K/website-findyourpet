import sanityClient from '@sanity/client'

export default sanityClient({
    "projectId": "3z7bi7zg",
    "dataset": "categories",
    apiVersion: '2021-03-25',
    dataset: 'categories',
    token: 'ske7H62btPqbUFntan8mbVbgsfnFcE60Mo3dGlYhDToYp964LeEv1ug3aUvTe6zWLpfIQx0641YdJbRyQSbYlG8DCfvR1BE6sLPw1Bd9r4PMKANbmgBx4Ssms9eRcHmhqGXIktcfQZCxoodBD5ZOaKLWAav12l17GrOTWS1wRlD6NfFAWsBo', // or leave blank for unauthenticated usage
    useCdn: true,
    ignoreBrowserTokenWarning: true,
})