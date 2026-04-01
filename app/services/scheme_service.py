from app.database.data import getConnection

def get_schemes(crop):
    conn=getConnection()
    cursor=conn.cursor()

    query="""
        select * from schemes
        where crop=? or crop='general'
    """

    cursor.execute(query,(crop,))
    results=cursor.fetchall()

    conn.close()

    return [dict(row) for row in results]
