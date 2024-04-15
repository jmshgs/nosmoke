
import { createClient } from '@supabase/supabase-js'
const supabaseUrl = 'https://vxqlzsejjbqdjvmqonmk.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZ4cWx6c2VqamJxZGp2bXFvbm1rIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTMxMzQ4NDIsImV4cCI6MjAyODcxMDg0Mn0.RNmZpu8AHuoojCtbVJPaaaOUq1pvVbqUIGy9DuXOHlE'
const supabase = createClient(supabaseUrl, supabaseKey)

export const signInWithGoogle = async () => {
    try {
        const { user, session, error } = await supabase.auth.signInWithOAuth({
            provider: 'google'
        })

        if (error) {
            throw new Error(error.message)
        }

        // Handle successful sign in
        console.log('User:', user)
        console.log('Session:', session)
    } catch (error) {
        // Handle sign in error
        console.error('Error signing in with Google:', error.message)
    }
}

export const fetchUser = async () => {
    const { data: { user } } = await supabase.auth.getUser()
    console.log(user)
    return user
}

export const insertData = async (journal, restingHR, happiness, relapse) => {
    try {
        let user = await fetchUser()
        .then(async user => {
            const { data, error } = await supabase
                .from('user_info')
                .insert(
                    { user_id: user.id, journal: journal, resting_hr: restingHR, happiness: happiness, relapse: relapse},
                )
            if (error) {
                throw new Error(error.message)
            }}
        )
        console.log('Data inserted successfully:', data)
    } catch (error) {
        console.error('Error inserting data:', error.message)
    }
}

export const fetchData = async () => {
    try {
        let data = await fetchUser()
        .then(async user => {
            const { data, error } = await supabase
                .from('user_info')
                .select()
                .eq('user_id', user.id)
            if (error) {
                throw new Error(error.message)
            }
        }
        )
        return data;

    } catch (error) {
        console.error('Error inserting data:', error.message)
    }
}