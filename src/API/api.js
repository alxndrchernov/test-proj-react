const path = "https://restart072.ru/events"

export const loginApi = (name, password) => fetch(`${path}/login`, {
    method: "POST",
    credentials: 'same-origin',
    mode: 'cors',
    redirect: 'follow',
    headers: {"Content-Type": "application/json",Accept: 'application/json', 'Access-Control-Allow-Origin': '*',},
    body: JSON.stringify({name, password})
})

export const getEventsApi = (accessToken) => fetch(`${path}`, {headers: {"Authorization": accessToken}})

export const setEventApi = (accessToken, data) => fetch(`${path}/create`, {
    method: "POST",
    headers: {"Authorization": accessToken, "Content-Type": 'application/json'},
    body: JSON.stringify(data)
})
