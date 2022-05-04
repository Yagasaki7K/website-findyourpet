import sanityClient from '@sanity/client'

export default sanityClient({
    "projectId": "3z7bi7zg",
    "dataset": "categories",
    apiVersion: '2021-03-25',
    dataset: 'categories',
    token: 'sk7XCP8vzgs5sOvb2vilhPE3tYCuVZCS6KnhMiTpaQy8qiL59Bz65UFglflEh7PPrS7aX73ddrWyYcUSHjo05fTjMKv0p9qQiifeNfAMbfQwSyh9jdWh2LH36GSxDm6hlPEZccWQmV7CsFLT1uGJF5itjTWrvZiz9FDNdVIKjhcOKVlW7uL2', // or leave blank for unauthenticated usage
    useCdn: true,
    ignoreBrowserTokenWarning: true,
})