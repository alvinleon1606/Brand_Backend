import joi from "joi";

interface IBlog {
    title:String,
    category:String,
    desc:String,
    tag:String,
}

const blogSchema = joi.object<IBlog>({
    title:joi.string().required(),
    category:joi.string().required(),
    desc:joi.string().required(),
    tag:joi.string().required()
});

export default blogSchema;
