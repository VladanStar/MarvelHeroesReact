class HeroObj {
    constructor(heroApi) {
        this.name = heroApi.name;
        this.id = heroApi.id;
        this.avatar = `${heroApi.thumbnail.path}/standard_xlarge.jpg`;
        this.teamImage = `${heroApi.thumbnail.path}/portrait_small.jpg`;
    }
}

class HeroInfoObj {
    constructor(heroInfoApi) {
        this.name = heroInfoApi.name
        this.image = `${heroInfoApi.thumbnail.path}/standard_fantastic.jpg`
        this.fullImage = `${heroInfoApi.thumbnail.path}/detail.jpg`
        this.id = heroInfoApi.id
        this.description = heroInfoApi.description
    }
}

export { HeroObj, HeroInfoObj };