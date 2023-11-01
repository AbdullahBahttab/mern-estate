export const errorHndler = (statusCode,Message )=>
{
    const err = new Error(Message);
    err.statusCode = statusCode;
    err.message = Message;
    return err;
}