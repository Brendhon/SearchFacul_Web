const courseFactory = data => {
    return {
        name: data.name || "",
        description: data.description || "",
        duration: data.duration || "",
        titration: data.titration || "",
        modality: data.modality || "",
        period: data.period || "",
        score: data.score || ""
    }
}

const universityFactory = data => {
    return {
        IES: data.IES || "",
        telephone: data.telephone  || "",
        email: data.email || "",
        uf: data.uf || "",
        city: data.city || "",
        address: data.address || "",
        category: data.category || "",
        site: data.site || ""
    }
}

export { courseFactory, universityFactory }